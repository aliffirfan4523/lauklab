import assert from 'node:assert/strict'
import test from 'node:test'

const content = () => import('../src/content.js')

test('the preview gives three alternatives that fit the same time, servings, and pan', async () => {
  const { sample } = await content()
  assert.equal(sample.meals.length, 3)
  for (const meal of sample.meals) {
    assert.equal(meal.servings, 2)
    assert.ok(meal.minutes > 0 && meal.minutes <= 20, meal.name)
    assert.equal(meal.equipment, 'frying pan')
    assert.ok(meal.steps.length >= 3, meal.name)
  }
})

test('each alternative stays within the explicitly listed pantry quantities', async () => {
  const { sample } = await content()
  const pantry = new Map(sample.ingredients.map((ingredient) => [ingredient.id, ingredient]))
  assert.ok(pantry.has('oil') && pantry.has('salt'), 'Pantry staples must be explicit')
  assert.equal(pantry.get('oil').amount, 2)
  assert.equal(pantry.get('salt').amount, 0.5)
  for (const meal of sample.meals) {
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
  const { sample } = await content()
  assert.equal(sample.meals.filter((meal) => meal.extras.length === 0).length, 2)
  const withExtras = sample.meals.filter((meal) => meal.extras.length > 0)
  assert.equal(withExtras.length, 1)
  assert.equal(withExtras[0].extras[0].id, 'tomatoes')
  assert.equal(withExtras[0].extras[0].amount, 250)
  const owned = new Set(sample.ingredients.map((ingredient) => ingredient.id))
  for (const meal of withExtras) {
    for (const extra of meal.extras) assert.ok(!owned.has(extra.id))
  }
})

test('sample instructions account for every used ingredient without hidden staples', async () => {
  const { sample } = await content()
  assert.ok(sample.meals.length > 0, 'Sample cooking flows must exist')
  for (const meal of sample.meals) {
    const instructions = meal.steps.join(' ').toLowerCase()
    for (const ingredient of [...meal.ingredients, ...meal.extras]) {
      assert.ok(instructions.includes(ingredient.id), `${meal.name}: missing ${ingredient.id} in steps`)
    }
    assert.ok(!/garlic|pepper|soy sauce|garnish/.test(instructions), meal.name)
  }
})

test('early access opens email with the public address and encoded subject', async () => {
  const { earlyAccessHref } = await content()
  assert.match(earlyAccessHref, /^mailto:/)
  const url = new URL(earlyAccessHref)
  assert.equal(url.protocol, 'mailto:')
  assert.equal(url.pathname, 'aliff@chiai.my')
  assert.equal(url.searchParams.get('subject'), 'lauklab by Chiai - early access interest')
  assert.ok(!earlyAccessHref.includes(' '))
})
