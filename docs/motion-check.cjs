const assert = require('node:assert/strict')
const fs = require('node:fs/promises')
const { chromium } = require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')

const origin = 'http://127.0.0.1:4173'
const evidence = { result: 'PENDING', chapters: [], checks: [], images: [], screenshots: [], errors: [], requests: [] }
const labels = ['Cook', 'Pantry', 'Recipe']
const ids = ['cook', 'pantry', 'recipe']

async function screen(page, index) {
  await page.waitForFunction(label => [...document.querySelectorAll('.screen-controls button')].some(button => button.textContent.trim() === label && button.getAttribute('aria-pressed') === 'true'), labels[index])
  assert.equal(await page.locator('.app-phone img[aria-hidden="false"]').count(), 1)
  assert.equal(await page.locator('.app-phone img.screen-active').count(), 1)
  const image = page.locator('.app-phone img[aria-hidden="false"]')
  await image.evaluate(image => image.decode())
  assert.ok((await image.getAttribute('src')).includes(ids[index] + '-'))
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.app-phone img.screen-active')).opacity === '1')
}

async function chapter(page, index, capture = false) {
  await page.locator('.preview-scene').nth(index).evaluate(element => {
    const bounds = element.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + bounds.top + bounds.height / 2 - innerHeight * .52)
  })
  await screen(page, index)
  const result = await page.locator('.app-phone').evaluate(element => {
    const bounds = element.getBoundingClientRect()
    return { top: bounds.top, bottom: bounds.bottom, left: bounds.left, right: bounds.right, viewportWidth: innerWidth, viewportHeight: innerHeight, position: getComputedStyle(element).position }
  })
  assert.equal(result.position, 'sticky')
  assert.ok(result.top >= -1 && result.bottom <= result.viewportHeight + 1, `${labels[index]} phone outside viewport: ${JSON.stringify(result)}`)
  assert.ok(result.left >= -1 && result.right <= result.viewportWidth + 1)
  evidence.chapters.push({ label: labels[index], ...result })
  if (capture) {
    await page.waitForTimeout(350)
    const path = `docs/screenshots/motion-desktop-${ids[index]}.png`
    await page.screenshot({ path })
    evidence.screenshots.push(path)
  }
}

async function fallback(page, width, height, label) {
  await page.setViewportSize({ width, height })
  await page.waitForFunction(() => !document.querySelector('#app-preview').classList.contains('motion-ready'))
  const result = await page.evaluate(() => ({ viewport: innerWidth, content: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), stories: getComputedStyle(document.querySelector('.preview-stories')).display, transform: getComputedStyle(document.querySelector('.app-phone')).transform }))
  assert.ok(result.content <= result.viewport + 1, `${label}: ${JSON.stringify(result)}`)
  assert.equal(result.stories, 'none')
  assert.equal(result.transform, 'none')
  for (const index of [1, 2, 0]) {
    await page.getByRole('group', { name: 'App preview screens', exact: true }).getByRole('button', { name: labels[index], exact: true }).click()
    await screen(page, index)
  }
  evidence.checks.push({ name: label + ' fallback and manual controls', ...result })
}

;(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true })
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, colorScheme: 'light', reducedMotion: 'no-preference' })
    page.on('pageerror', error => evidence.errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') evidence.errors.push(message.text()) })
    page.on('request', request => evidence.requests.push({ url: request.url(), type: request.resourceType() }))
    await fs.mkdir('docs/screenshots', { recursive: true })
    const response = await page.goto(origin, { waitUntil: 'networkidle' })
    assert.equal(response.status(), 200)
    await page.waitForFunction(() => document.querySelector('#app-preview').classList.contains('motion-ready'))
    assert.equal(await page.locator('.preview-scene').count(), 3)
    const tallHeight = await page.locator('#app-preview').evaluate(element => element.getBoundingClientRect().height)
    for (const index of [0, 1, 2]) await chapter(page, index, true)
    evidence.checks.push({ name: 'Forward chapters select Cook, Pantry, Recipe with phone contained', sectionHeight: tallHeight })
    for (const index of [1, 0]) await chapter(page, index)
    evidence.checks.push({ name: 'Reverse scrolling restores Pantry then Cook' })

    await page.getByRole('group', { name: 'App preview screens', exact: true }).getByRole('button', { name: 'Recipe', exact: true }).click()
    await screen(page, 2)
    await page.evaluate(() => window.scrollBy(0, 10))
    await page.waitForTimeout(150)
    await screen(page, 2)
    await page.evaluate(() => window.scrollBy(0, 36))
    await screen(page, 0)
    evidence.checks.push({ name: 'Manual Recipe override survives 10px jitter, resumes Cook after deliberate 36px scroll' })
    await chapter(page, 1)

    for (const theme of ['Dark', 'Light']) {
      await page.getByRole('group', { name: 'Theme', exact: true }).getByRole('button', { name: theme, exact: true }).evaluate(button => button.focus({ preventScroll: true }))
      await page.keyboard.press('Space')
      await screen(page, 1)
      assert.ok((await page.locator('.app-phone img[aria-hidden="false"]').getAttribute('src')).includes('pantry-' + theme.toLowerCase()))
      await page.locator('img').evaluateAll(async images => {
        images.forEach(image => { image.loading = 'eager' })
        await Promise.all(images.map(image => image.decode()))
      })
      const images = await page.locator('img').evaluateAll(images => images.map(image => ({ source: image.getAttribute('src'), width: image.naturalWidth, height: image.naturalHeight })))
      assert.ok(images.every(image => image.width > 0 && image.height > 0))
      evidence.images.push({ theme, assets: images })
      evidence.checks.push({ name: theme + ' updates images while preserving Pantry selection; all bundled page images decode', imageCount: images.length })
    }

    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.waitForFunction(() => !document.querySelector('#app-preview').classList.contains('motion-ready'))
    const reduced = await page.locator('#app-preview').evaluate(element => ({ height: element.getBoundingClientRect().height, stories: getComputedStyle(element.querySelector('.preview-stories')).display, transform: getComputedStyle(element.querySelector('.app-phone')).transform, transition: getComputedStyle(element.querySelector('.phone-screens img')).transitionDuration }))
    assert.equal(reduced.stories, 'none')
    assert.equal(reduced.transform, 'none')
    assert.equal(reduced.transition, '0s')
    assert.ok(reduced.height < tallHeight * .8, JSON.stringify({ reduced, tallHeight }))
    await page.getByRole('group', { name: 'App preview screens', exact: true }).getByRole('button', { name: 'Recipe', exact: true }).click()
    await screen(page, 2)
    evidence.checks.push({ name: 'Live reduced motion removes tall chapters, phone transform and image transitions; manual selection works', ...reduced })
    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await page.waitForFunction(() => document.querySelector('#app-preview').classList.contains('motion-ready'))
    await chapter(page, 1)
    evidence.checks.push({ name: 'Live restoration of motion resumes chapter selection' })

    await fallback(page, 390, 844, 'Mobile 390px')
    await page.locator('#app-preview').screenshot({ path: 'docs/screenshots/motion-mobile.png' })
    evidence.screenshots.push('docs/screenshots/motion-mobile.png')
    await fallback(page, 320, 844, 'Mobile 320px')
    await fallback(page, 768, 1024, 'Tablet 768px')
    await fallback(page, 1440, 580, 'Short desktop 580px')
    assert.deepEqual(evidence.errors, [])
    assert.deepEqual(evidence.requests.filter(request => ['fetch', 'xhr'].includes(request.type)), [])
    assert.ok(evidence.requests.every(request => new URL(request.url).origin === origin))
    evidence.result = 'PASS'
    console.log(JSON.stringify({ result: evidence.result, chapters: evidence.chapters.length, checks: evidence.checks.length, screenshots: evidence.screenshots.length, decodedThemeSets: evidence.images.length, errors: evidence.errors.length, externalRequests: 0 }, null, 2))
  } catch (error) {
    evidence.result = 'FAIL'
    evidence.failure = error.message
    throw error
  } finally {
    await fs.writeFile('docs/motion-check-results.json', JSON.stringify(evidence, null, 2) + '\n')
    await browser.close()
  }
})().catch(error => { console.error(error); process.exitCode = 1 })
