import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vite from '../vite.config.js'

test('Hosting serves the public build only to the lauklab site', async () => {
  const hosting = JSON.parse(await readFile(new URL('../firebase.json', import.meta.url), 'utf8')).hosting
  const rc = JSON.parse(await readFile(new URL('../.firebaserc', import.meta.url), 'utf8'))
  assert.equal(hosting.target, 'lauklab')
  assert.equal(hosting.public, 'public')
  assert.equal(hosting.site, undefined)
  assert.equal(rc.projects.default, 'chiai-my')
  assert.deepEqual(rc.targets['chiai-my'].hosting, { lauklab: ['lauklab'] })
  assert.equal(vite.publicDir, false)
  assert.equal(vite.base, '/')
  assert.equal(vite.build.outDir, 'public')
})

test('GitHub publishing requires manual dispatch and selects a scoped channel', async () => {
  for (const [file, channel] of [
    ['firebase-hosting-pull-request.yml', 'review'],
    ['firebase-hosting-merge.yml', 'live'],
  ]) {
    const workflow = (await readFile(new URL('../.github/workflows/' + file, import.meta.url), 'utf8')).replaceAll('\r\n', '\n')
    assert.match(workflow, /^on: workflow_dispatch$/m)
    assert.match(workflow, /^\s+projectId: chiai-my$/m)
    assert.match(workflow, /^\s+target: lauklab$/m)
    assert.match(workflow, new RegExp('^\\s+channelId: ' + channel + '$', 'm'))
  }
})
