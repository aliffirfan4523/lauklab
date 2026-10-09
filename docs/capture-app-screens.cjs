const assert = require('node:assert/strict')
const path = require('node:path')
const { chromium } = require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')

;(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true })
  try {
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' })
      const page = await context.newPage()
      const errors = []
      page.on('pageerror', error => errors.push(error.message))
      for (const view of ['cook', 'pantry', 'recipe']) {
        await page.goto(`http://127.0.0.1:4181/?view=${view}&theme=${theme}&platform=ios`, { waitUntil: 'networkidle' })
        await page.locator('#content h1').waitFor()
        await page.locator('#app img').evaluateAll(images => Promise.all(images.map(image => image.decode())))
        assert.equal(await page.locator('#app').evaluate(app => app.scrollWidth <= app.clientWidth), true)
        await page.locator('#app').screenshot({ path: path.resolve(`src/assets/app/${view}-${theme}.png`) })
      }
      assert.deepEqual(errors, [])
      await context.close()
    }
    console.log('PASS: six current app captures, images decoded, no page errors or frame overflow.')
  } finally { await browser.close() }
})().catch(error => { console.error(error); process.exitCode = 1 })
