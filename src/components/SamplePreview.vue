<script setup>
import { copy, sample } from '../content.js'
</script>

<template>
  <section id="preview" class="preview-section" aria-labelledby="preview-heading">
    <div class="shell">
      <div class="preview-heading">
        <div><h2 id="preview-heading">{{ copy.preview.title }}</h2></div><p>{{ copy.preview.description }}</p>
      </div>
      <p class="preview-disclaimer">{{ copy.preview.disclaimer }}</p>
      <div class="meal-grid">
        <article v-for="(meal, index) in sample.meals" :key="meal.id" class="meal-card" :aria-labelledby="meal.id + '-heading'">
          <div class="meal-meta"><span aria-hidden="true">0{{ index + 1 }}</span><span>{{ meal.minutes }} {{ copy.ui.minutes }} · {{ copy.ui.servings }}</span></div>
          <h3 :id="meal.id + '-heading'">{{ meal.name }}</h3>
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
        </article>
      </div>
      <p class="preview-note">{{ copy.preview.note }}</p>
    </div>
  </section>
</template>
