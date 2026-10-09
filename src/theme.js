const choices = new Set(['system', 'light', 'dark'])

export function createThemePreference(root, getStorage) {
  let preference = 'system'
  try {
    const saved = getStorage().getItem('lauklab-theme')
    if (choices.has(saved)) preference = saved
  } catch {}
  root.dataset.theme = preference

  return {
    get preference() { return preference },
    set(value) {
      if (!choices.has(value)) throw new RangeError('Unknown appearance preference')
      preference = value
      root.dataset.theme = value
      try { getStorage().setItem('lauklab-theme', value) } catch {}
    },
  }
}
