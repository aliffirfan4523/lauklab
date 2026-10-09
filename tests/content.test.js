import assert from 'node:assert/strict'
import test from 'node:test'

const content = () => import('../src/content.js')

test('the Malaysian meals fit the cooking window, servings, and pan', async () => {
  const { kitchen } = await content()
  assert.equal(kitchen.meals.length, 3)
  for (const meal of kitchen.meals) {
    assert.equal(meal.servings, 2)
    assert.ok(meal.minutes > 0 && meal.minutes <= kitchen.minutes, meal.name)
    assert.equal(meal.equipment, 'frying pan')
    assert.ok(meal.steps.length >= 3, meal.name)
  }
})

test('each alternative stays within the explicitly listed pantry quantities', async () => {
  const { kitchen } = await content()
  const pantry = new Map(kitchen.ingredients.map((ingredient) => [ingredient.id, ingredient]))
  assert.ok(pantry.has('oil') && pantry.has('salt'), 'Pantry staples must be explicit')
  assert.equal(pantry.get('oil').amount, 6)
  assert.equal(pantry.get('salt').amount, 1)
  for (const meal of kitchen.meals) {
    const totals = new Map()
    for (const ingredient of meal.ingredients) {
      assert.ok(pantry.has(ingredient.id), `${meal.name}: ${ingredient.id} is not owned`)
      assert.ok(ingredient.amount > 0)
      totals.set(ingredient.id, (totals.get(ingredient.id) ?? 0) + ingredient.amount)
    }
    for (const [id, amount] of totals) {
      assert.ok(amount <= pantry.get(id).amount, `${meal.name} needs too much ${id}`)
    }
  }
})

test('missing ingredients remain distinct from ingredients already in the pantry', async () => {
  const { kitchen } = await content()
  const withExtras = kitchen.meals.filter((meal) => meal.extras.length > 0)
  assert.equal(withExtras.length, 3)
  const owned = new Set(kitchen.ingredients.map((ingredient) => ingredient.id))
  for (const meal of withExtras) {
    for (const extra of meal.extras) {
      assert.ok(!owned.has(extra.id))
      assert.ok(extra.amount > 0 && Number.isFinite(extra.amount))
      assert.ok(['g', 'pieces', 'tomatoes', 'tbsp', 'tsp', 'ml'].includes(extra.unit))
    }
    assert.equal(new Set(meal.extras.map(item => item.id)).size, meal.extras.length)

  }
})

test('kitchen instructions account for every used ingredient without hidden staples', async () => {
  const { kitchen } = await content()
  assert.ok(kitchen.meals.length > 0, 'Recipe cooking flows must exist')
  for (const meal of kitchen.meals) {
    const instructions = meal.steps.join(' ').toLowerCase()
    for (const ingredient of [...meal.ingredients, ...meal.extras]) {
      const names = { chiliPaste: 'chili paste', chiliSauce: 'chili sauce', oysterSauce: 'oyster sauce', sweetSoy: 'sweet soy sauce', curry: 'curry powder', ketchup: 'tomato sauce', tamarind: 'tamarind water', bihun: 'vermicelli', soy: 'light soy sauce', tomatoes: 'tomato' }
      assert.ok(instructions.includes(names[ingredient.id] || ingredient.id), `${meal.name}: missing ${ingredient.id} in steps`)
    }

  }
})

test('public content keeps Chiai branding without external contact destinations', async () => {
  const current = await content()
  assert.deepEqual(current.project, { name: 'lauklab', brand: 'Chiai' })
  assert.doesNotMatch(JSON.stringify(current), /chiai[.]my|mailto:/i)
  assert.equal(current.earlyAccessHref, undefined)
  assert.equal(current.copy.contact, undefined)
  assert.deepEqual(current.navigation.map(item => item.href), ['#idea', '#app-preview', '#preview', '#roadmap', '#about'])
})

test('the owner-confirmed beta status and attributed Malaysian kitchen versions are consistent', async () => {
  const { copy, metadata, kitchen } = await content()
  assert.match(copy.hero.status, /Currently in closed beta testing/)
  assert.match(metadata.title, /Closed beta testing/)
  assert.doesNotMatch(JSON.stringify(copy), /illustrative|sample data|not live AI|professionally tested/i)
  assert.deepEqual(kitchen.meals.map(meal => meal.name), ['Nasi goreng kampung', 'Mee goreng mamak', 'Bihun goreng'])
  const units = new Map(kitchen.ingredients.map(item => [item.id, item.unit]))
  for (const meal of kitchen.meals) {
    assert.equal(new URL(meal.source.url).protocol, 'https:')
    assert.equal(new URL(meal.source.url).hostname, 'resepichenom.com')
    assert.ok(meal.version.length > 0)
    for (const extra of meal.extras) {
      if (units.has(extra.id)) assert.equal(extra.unit, units.get(extra.id))
      units.set(extra.id, extra.unit)
    }
  }
  assert.match(kitchen.meals[1].version, /already-boiled potato/)
  assert.deepEqual(copy.appPreview.screens.map(screen => screen.id), ['cook', 'pantry', 'recipe'])
})
