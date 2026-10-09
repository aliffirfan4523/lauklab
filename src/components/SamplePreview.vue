<script setup>
import { copy, kitchen } from '../content.js'
import nasiGoreng from '../assets/meals/nasi-goreng-kampung.webp'
import meeGoreng from '../assets/meals/mee-goreng-mamak.webp'
import bihunGoreng from '../assets/meals/bihun-goreng.webp'

const mealImages = {
  'nasi-goreng-kampung': nasiGoreng,
  'mee-goreng-mamak': meeGoreng,
  'bihun-goreng': bihunGoreng,
}
</script>

<template>
  <section id="preview" class="preview-section" aria-labelledby="preview-heading">
    <div class="shell">
      <div class="preview-heading">
        <div><h2 id="preview-heading">{{ copy.preview.title }}</h2></div><p>{{ copy.preview.description }}</p>
      </div>
      <div class="meal-grid">
        <article v-for="meal in kitchen.meals" :key="meal.id" class="meal-card" :aria-labelledby="meal.id + '-heading'">
          <img class="meal-photo" :src="mealImages[meal.id]" alt="" width="1254" height="1254" loading="lazy" decoding="async" />
          <div class="meal-meta"><span>{{ meal.minutes }} {{ copy.ui.minutes }} · {{ copy.ui.servings }}</span><span>{{ meal.equipment }}</span></div>
          <h3 :id="meal.id + '-heading'">{{ meal.name }}</h3>
          <p class="meal-version">{{ meal.version }}</p>
          <p class="availability" :class="{ 'needs-extra': meal.extras.length }">{{ meal.extras.length ? copy.preview.extraLabel : copy.preview.readyLabel }}</p>
          <h4>{{ copy.preview.usedTitle }}</h4>
          <ul class="meal-ingredients"><li v-for="ingredient in meal.ingredients" :key="ingredient.id">{{ ingredient.label }}</li></ul>
          <h4>{{ copy.preview.extraTitle }}</h4>
          <ul v-if="meal.extras.length" class="extra-ingredients"><li v-for="extra in meal.extras" :key="extra.id">{{ extra.label }}</li></ul>
          <p v-else class="no-extras">{{ copy.preview.noExtras }}</p><p class="meal-fit">{{ meal.fit }}</p>
          <details class="meal-steps">
            <summary>{{ copy.preview.stepsAction }}<span class="sr-only">: {{ meal.name }}</span></summary><p class="steps-label">{{ copy.preview.stepsLabel }}</p>
            <ol><li v-for="step in meal.steps" :key="step">{{ step }}</li></ol>
          </details>
          <a class="recipe-source" :href="meal.source.url" target="_blank" rel="noopener noreferrer">{{ copy.preview.sourceLabel }}: {{ meal.source.name }}<span class="sr-only">: {{ meal.name }} (opens a new tab)</span></a>
        </article>
      </div>
      <p class="preview-note">{{ copy.preview.note }}</p>
    </div>
  </section>
</template>
