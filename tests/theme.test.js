import assert from 'node:assert/strict'
import test from 'node:test'
import { createThemePreference } from '../src/theme.js'

function environment(saved = null) {
  const values = new Map(saved === null ? [] : [['lauklab-theme', saved]])
  const root = { dataset: {} }
  const storage = { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) }
  return { root, values, storage }
}

test('a new visitor follows the system and changing appearance survives a new session', () => {
  const { root, storage, values } = environment()
  const theme = createThemePreference(root, () => storage)
  assert.equal(theme.preference, 'system')
  assert.equal(root.dataset.theme, 'system')
  theme.set('dark')
  assert.equal(root.dataset.theme, 'dark')
  assert.equal(values.get('lauklab-theme'), 'dark')
  const next = createThemePreference({ dataset: {} }, () => storage)
  assert.equal(next.preference, 'dark')
  next.set('light')
  assert.equal(values.get('lauklab-theme'), 'light')
  next.set('system')
  assert.equal(values.get('lauklab-theme'), 'system')
})

test('invalid saved preferences fall back to system without changing unrelated storage', () => {
  const { root, storage, values } = environment('invalid')
  values.set('other-app', 'keep')
  const theme = createThemePreference(root, () => storage)
  assert.equal(theme.preference, 'system')
  theme.set('light')
  assert.equal(root.dataset.theme, 'light')
  assert.equal(values.get('other-app'), 'keep')
})

test('blocked storage still permits appearance changes during this visit', () => {
  const root = { dataset: {} }
  const theme = createThemePreference(root, () => { throw new Error('Storage access blocked') })
  assert.equal(theme.preference, 'system')
  theme.set('dark')
  assert.equal(theme.preference, 'dark')
  assert.equal(root.dataset.theme, 'dark')
})

test('a failed save retains the selected appearance and switching back to system works', () => {
  const root = { dataset: {} }
  const storage = { getItem: () => 'dark', setItem: () => { throw new Error('Quota exceeded') } }
  const theme = createThemePreference(root, () => storage)
  theme.set('light')
  assert.equal(root.dataset.theme, 'light')
  theme.set('system')
  assert.equal(theme.preference, 'system')
  assert.equal(root.dataset.theme, 'system')
})

test('invalid new preferences do not replace the current choice', () => {
  const { root, storage, values } = environment('dark')
  const theme = createThemePreference(root, () => storage)
  assert.throws(() => theme.set('sepia'), RangeError)
  assert.equal(theme.preference, 'dark')
  assert.equal(root.dataset.theme, 'dark')
  assert.equal(values.get('lauklab-theme'), 'dark')
})
