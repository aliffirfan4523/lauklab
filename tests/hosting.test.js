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

test('CI checks pull requests and deploys only checked main updates to lauklab', async () => {
  const workflow = (await readFile(new URL('../.github/workflows/firebase-hosting-merge.yml', import.meta.url), 'utf8')).replaceAll('\r\n', '\n')
  assert.match(workflow, /^  push:\n    branches:\n      - main$/m)
  assert.match(workflow, /^  pull_request:$/m)
  assert.match(workflow, /if: github\.event_name != 'pull_request' && github\.ref == 'refs\/heads\/main'/)
  assert.match(workflow, /^\s+projectId: chiai-my$/m)
  assert.match(workflow, /^\s+target: lauklab$/m)
  assert.match(workflow, /^\s+channelId: live$/m)
  const install = workflow.indexOf('run: npm ci')
  const checks = workflow.indexOf('run: npm test')
  const build = workflow.indexOf('run: npm run build')
  const deploy = workflow.indexOf('uses: FirebaseExtended/action-hosting-deploy')
  assert.ok(install >= 0 && install < checks && checks < build && build < deploy)
})
