const assert = require('node:assert/strict')
const fs = require('node:fs/promises')
const { chromium } = require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')

const origin = 'http://127.0.0.1:4173'
const evidence = { layouts: [], themes: [], interactions: [], contrast: [], requests: [], errors: [] }
function observe(page) {
  page.on('pageerror', error => evidence.errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') evidence.errors.push(message.text()) })
  page.on('request', request => evidence.requests.push({ url: request.url(), type: request.resourceType() }))
}
function luminance(rgb) {
  const channels = rgb.match(/[\d.]+/g).slice(0, 3).map(Number).map(value => {
    const channel = value / 255
    return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4
  })
  return .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2]
}
function ratio(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (values[0] + .05) / (values[1] + .05)
}
async function appearance(page, expected, label) {
  const background = expected === 'dark' ? 'rgb(21, 30, 25)' : 'rgb(247, 243, 232)'
  await page.waitForFunction(color => getComputedStyle(document.documentElement).backgroundColor === color, background)
  evidence.themes.push({ label, expected, ...await page.evaluate(() => ({ preference: document.documentElement.dataset.theme, background: getComputedStyle(document.documentElement).backgroundColor })) })
}
async function layout(page, theme, width, enlarged = false) {
  await page.setViewportSize({ width, height: 1000 })
  await page.evaluate(enlarged => document.documentElement.style.fontSize = enlarged ? '200%' : '', enlarged)
  const result = await page.evaluate(() => {
    const targets = Array.from(document.querySelectorAll('a, summary, select')).filter(element => element.getClientRects().length && !element.closest('.sr-only')).map(element => {
      const rect = element.getBoundingClientRect()
      return { label: element.innerText?.trim() || element.value, width: rect.width, height: rect.height }
    })
    return { viewport: innerWidth, content: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), font: getComputedStyle(document.documentElement).fontSize, targets }
  })
  assert.ok(result.content <= result.viewport + 1, `${theme} ${width}px enlarged=${enlarged}: overflow ${result.content}`)
  for (const target of result.targets) {
    assert.ok(target.width >= 48 && target.height >= 48, `${theme} ${width}px: small target ${JSON.stringify(target)}`)
  }
  evidence.layouts.push({ theme, width, enlarged, ...result })
}
async function contrasts(page, theme) {
  const pairs = await page.evaluate(() => {
    function background(element) {
      while (element) {
        const color = getComputedStyle(element).backgroundColor
        if (!/rgba\([^)]*,\s*0\)/.test(color) && color !== 'transparent') return color
        element = element.parentElement
      }
      return getComputedStyle(document.documentElement).backgroundColor
    }
    const rows = []
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) {
      const node = walker.currentNode
      const parent = node.parentElement
      if (!node.textContent.trim() || parent.closest('script, style, .sr-only')) continue
      const range = document.createRange()
      range.selectNode(node)
      if (!range.getClientRects().length) continue
      const style = getComputedStyle(parent)
      if (style.visibility === 'hidden') continue
      rows.push({ text: node.textContent.trim().slice(0, 70), foreground: style.color, background: background(parent) })
    }
    const select = document.querySelector('select')
    rows.push({ text: 'Theme selection', foreground: getComputedStyle(select).color, background: background(select) })
    return rows
  })
  const unique = new Map()
  for (const pair of pairs) {
    const score = ratio(pair.foreground, pair.background)
    assert.ok(score >= 4.5, `${theme}: text contrast ${score} ${JSON.stringify(pair)}`)
    unique.set(pair.foreground + pair.background, { ...pair, ratio: score })
  }
  const controls = await page.evaluate(() => {
    const style = getComputedStyle(document.documentElement)
    return {
      border: style.getPropertyValue('--border').trim(), surface: style.getPropertyValue('--paper').trim(),
      focus: style.getPropertyValue('--orange').trim(), page: style.getPropertyValue('--cream').trim(),
      panelFocus: style.getPropertyValue('--on-panel').trim(), panel: style.getPropertyValue('--panel').trim(),
    }
  })
  const rgb = hex => 'rgb(' + hex.match(/[a-f\d]{2}/gi).map(value => parseInt(value, 16)).join(', ') + ')'
  const boundaries = [
    { name: 'Theme control boundary', ratio: ratio(rgb(controls.border), rgb(controls.surface)) },
    { name: 'Focus on page', ratio: ratio(rgb(controls.focus), rgb(controls.page)) },
    { name: 'Focus on surface', ratio: ratio(rgb(controls.focus), rgb(controls.surface)) },
    { name: 'Focus on panel', ratio: ratio(rgb(controls.panelFocus), rgb(controls.panel)) },
  ]
  for (const boundary of boundaries) assert.ok(boundary.ratio >= 3, theme + ': ' + JSON.stringify(boundary))
  evidence.contrast.push({ theme, textPairs: [...unique.values()], boundaries })
}

;(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true })
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: 'light', reducedMotion: 'reduce' })
  const page = await context.newPage()
  observe(page)
  await fs.mkdir('docs/screenshots', { recursive: true })
  try {
    const response = await page.goto(origin, { waitUntil: 'networkidle' })
    assert.equal(response.status(), 200)
    assert.equal(await page.locator('h1').innerText(), 'Good meals start with what you already have.')
    assert.equal(await page.locator('h1').count(), 1)
    assert.equal(await page.locator('.meal-card').count(), 3)
    assert.equal(await page.locator('.preview-disclaimer').innerText(), 'Illustrative preview — sample data, not live AI.')
    assert.equal(await page.locator('link[rel=canonical]').count(), 0)
    assert.match(await page.title(), /^lauklab by Chiai/)
    evidence.interactions.push('Built page HTTP 200, expected title/headline, one H1, three meals, exact disclaimer, and no canonical.')
    await appearance(page, 'light', 'System follows light')
    await page.emulateMedia({ colorScheme: 'dark' })
    await appearance(page, 'dark', 'System observes OS change to dark')
    await page.getByLabel('Theme', { exact: true }).selectOption('light')
    await appearance(page, 'light', 'Light override ignores dark OS')
    await page.reload({ waitUntil: 'networkidle' })
    assert.equal(await page.getByLabel('Theme', { exact: true }).inputValue(), 'light')
    await appearance(page, 'light', 'Light override persists on reload')
    await page.getByLabel('Theme', { exact: true }).selectOption('dark')
    await page.emulateMedia({ colorScheme: 'light' })
    await appearance(page, 'dark', 'Dark override ignores light OS')
    await page.reload({ waitUntil: 'networkidle' })
    await appearance(page, 'dark', 'Dark override persists on reload')
    await page.getByLabel('Theme', { exact: true }).selectOption('system')
    await appearance(page, 'light', 'Returning to System restores OS light')
    await page.emulateMedia({ colorScheme: 'dark' })
    await appearance(page, 'dark', 'Returned System observes OS dark')

    for (const theme of ['light', 'dark']) {
      await page.getByLabel('Theme', { exact: true }).selectOption(theme)
      for (const width of [320, 390, 768, 1440]) await layout(page, theme, width)
      for (const width of [320, 390, 720]) await layout(page, theme, width, true)
      await page.evaluate(() => document.documentElement.style.fontSize = '')
      await page.setViewportSize({ width: 1440, height: 1000 })
      await page.goto(origin + '/#top', { waitUntil: 'networkidle' })
      for (const summary of await page.locator('.meal-steps summary, .faq-list summary').all()) await summary.click()
      await contrasts(page, theme)
      await page.locator('#preview').screenshot({ path: `docs/screenshots/founder-${theme}-preview.png` })
      for (const details of await page.locator('.meal-steps, .faq-list details').all()) await details.evaluate(element => element.open = false)
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.screenshot({ path: `docs/screenshots/founder-${theme}-desktop.png` })
      await page.screenshot({ path: `docs/screenshots/founder-${theme}-desktop-full.png`, fullPage: true })
      await page.setViewportSize({ width: 390, height: 844 })
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.screenshot({ path: `docs/screenshots/founder-${theme}-mobile.png` })
    }

    await page.setViewportSize({ width: 1440, height: 1000 })
    for (const link of await page.locator('.desktop-nav a').all()) {
      const href = await link.getAttribute('href')
      await link.click()
      assert.equal(new URL(page.url()).hash, href)
      assert.equal(await page.locator(href).count(), 1)
    }
    await page.getByRole('link', { name: 'See the sample meals', exact: true }).click()
    assert.equal(new URL(page.url()).hash, '#preview')
    for (const summary of await page.locator('.meal-steps summary, .faq-list summary').all()) {
      await summary.click()
      assert.equal(await summary.evaluate(element => element.parentElement.open), true)
      await summary.press('Enter')
      assert.equal(await summary.evaluate(element => element.parentElement.open), false)
      await summary.press('Space')
      assert.equal(await summary.evaluate(element => element.parentElement.open), true)
      await summary.press('Space')
      assert.equal(await summary.evaluate(element => element.parentElement.open), false)
    }
    evidence.interactions.push('Desktop four section destinations and hero preview action; all three recipes and six FAQs open and close by click/Enter/Space.')
    await page.setViewportSize({ width: 390, height: 844 })
    const menu = page.locator('.mobile-nav summary')
    await menu.press('Enter')
    assert.equal(await page.locator('.mobile-nav').evaluate(element => element.open), true)
    await layout(page, 'dark', 390)
    for (const link of await page.locator('.mobile-nav a').all()) {
      const href = await link.getAttribute('href')
      await link.click()
      assert.equal(new URL(page.url()).hash, href)
    }
    await menu.press('Space')
    assert.equal(await page.locator('.mobile-nav').evaluate(element => element.open), false)
    evidence.interactions.push('Mobile Menu Enter/Space and all four section links; expanded-menu targets remain at least 48px.')
    const emailLinks = await page.locator('a[href^="mailto:"]').all()
    assert.equal(emailLinks.length, 3)
    for (const link of emailLinks) {
      const url = new URL(await link.getAttribute('href'))
      assert.equal(url.pathname, 'aliff@chiai.my')
      if (url.search) assert.equal(url.searchParams.get('subject'), 'lauklab by Chiai - early access interest')
    }
    for (const link of await page.locator('a[href^="https:"]').all()) assert.equal(await link.getAttribute('href'), 'https://chiai.my')
    await page.getByRole('link', { name: 'Back to top', exact: true }).click()
    assert.equal(new URL(page.url()).hash, '#top')
    await page.locator('.wordmark').click()
    assert.equal(new URL(page.url()).hash, '#top')
    evidence.interactions.push('Three email destinations/encoded subjects, portfolio hrefs, wordmark and Back to top verified; external clients were not launched.')
    await page.goto(origin, { waitUntil: 'networkidle' })
    await page.keyboard.press('Tab')
    assert.equal(await page.evaluate(() => document.activeElement.className), 'skip-link')
    assert.equal(await page.evaluate(() => getComputedStyle(document.activeElement).outlineWidth), '3px')
    await page.keyboard.press('Enter')
    assert.equal(new URL(page.url()).hash, '#main')
    const select = page.getByLabel('Theme', { exact: true })
    await select.focus()
    assert.equal(await select.evaluate(element => getComputedStyle(element).outlineWidth), '3px')
    await select.press('Home')
    await select.press('ArrowDown')
    await select.press('Tab')
    assert.equal(await select.inputValue(), 'light')
    evidence.interactions.push('Keyboard skip link and native Theme selector; 3px focus outline visible on both.')

    const blockedContext = await browser.newContext({ colorScheme: 'light', viewport: { width: 390, height: 844 } })
    await blockedContext.addInitScript(() => Object.defineProperty(window, 'localStorage', { configurable: true, get() { throw new Error('Storage blocked') } }))
    const blocked = await blockedContext.newPage()
    observe(blocked)
    await blocked.goto(origin, { waitUntil: 'networkidle' })
    await appearance(blocked, 'light', 'Blocked storage falls back to System light')
    await blocked.getByLabel('Theme', { exact: true }).selectOption('dark')
    await appearance(blocked, 'dark', 'Blocked storage still permits Dark this visit')
    await blocked.getByLabel('Theme', { exact: true }).selectOption('system')
    await blocked.emulateMedia({ colorScheme: 'dark' })
    await appearance(blocked, 'dark', 'Blocked storage can return to System and follow OS')
    await blockedContext.close()
    assert.deepEqual(evidence.errors, [])
    assert.deepEqual(evidence.requests.filter(request => ['fetch', 'xhr'].includes(request.type)), [])
    assert.ok(evidence.requests.every(request => new URL(request.url).origin === origin))
    evidence.result = 'PASS'
    await fs.writeFile('docs/landing-check-results.json', JSON.stringify(evidence, null, 2) + '\n')
    console.log(JSON.stringify({ result: evidence.result, layouts: evidence.layouts.length, themeChecks: evidence.themes.length, interactionGroups: evidence.interactions.length, contrastPairs: evidence.contrast.map(row => ({ theme: row.theme, pairs: row.textPairs.length, minimum: Math.min(...row.textPairs.map(pair => pair.ratio)) })), errors: evidence.errors.length, externalRequests: 0 }, null, 2))
  } finally { await browser.close() }
})().catch(error => { console.error(error); process.exitCode = 1 })
