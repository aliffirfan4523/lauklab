<script setup>
import { ref } from 'vue'
import { copy, navigation, project, kitchen } from './content.js'
import SamplePreview from './components/SamplePreview.vue'
import AppPreview from './components/AppPreview.vue'
import { createThemePreference } from './theme.js'
import logo from './assets/brand/lauklab-logo-256.png'

const appearance = createThemePreference(document.documentElement, () => window.localStorage)
const themePreference = ref(appearance.preference)
function changeTheme(value) {
  appearance.set(value)
  themePreference.value = value
}
</script>

<template>
  <div id="top" class="lauklab-page">
    <a class="skip-link" href="#main">{{ copy.ui.skipLink }}</a>
    <header class="site-header shell">
      <a class="wordmark" href="#top" :aria-label="project.name + ' by ' + project.brand">
        <img :src="logo" alt="" width="52" height="52" />
        <div>{{ project.name }}<span>by {{ project.brand }}</span></div>
      </a>
      <nav class="desktop-nav" :aria-label="copy.ui.navigationLabel">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <details class="mobile-nav">
        <summary>{{ copy.ui.menu }}</summary>
        <nav :aria-label="copy.ui.navigationLabel">
          <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
      </details>
      <div class="theme-control" role="group" :aria-label="copy.ui.appearanceLabel">
        <button v-for="option in copy.ui.appearanceOptions" :key="option.value" type="button" :aria-pressed="themePreference === option.value" @click="changeTheme(option.value)">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <template v-if="option.value === 'system'"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></template>
            <template v-else-if="option.value === 'light'"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></template>
            <path v-else d="M20.4 14.6A9 9 0 0 1 9.4 3.6 9 9 0 1 0 20.4 14.6Z" />
          </svg>
          {{ option.label }}
        </button>
      </div>
    </header>
    <main id="main">
      <section class="hero shell" aria-labelledby="hero-heading">
        <div class="hero-copy">
          <h1 id="hero-heading">{{ copy.hero.headline }}</h1>
          <p class="hero-description">{{ copy.hero.description }}</p>
          <p class="development-note">{{ copy.hero.status }}</p>
          <div class="hero-actions">
            <a class="button" href="#app-preview">{{ copy.hero.previewAction }}</a>
            <a class="text-link" href="#preview">{{ copy.hero.mealsAction }}</a>
          </div>
        </div>
        <aside class="pantry-note" aria-labelledby="pantry-heading">
          <h2 id="pantry-heading">{{ copy.hero.pantryTitle }}</h2>
          <p>{{ copy.hero.pantryIntro }}</p>
          <ul class="pantry-list"><li v-for="ingredient in kitchen.ingredients" :key="ingredient.id">{{ ingredient.label }}</li></ul>
          <div class="scenario"><span>{{ copy.ui.servings }}</span><span>{{ copy.ui.time }}</span><span>{{ copy.ui.equipment }}</span></div>
          <p class="pantry-footnote">{{ copy.hero.pantryFooter }}</p>
        </aside>
      </section>
      <AppPreview :preference="themePreference" />
      <section id="idea" class="idea-section" aria-labelledby="idea-heading">
        <div class="shell idea-grid">
          <div>
            <h2 id="idea-heading">{{ copy.idea.title }}</h2>
            <p>{{ copy.idea.description }}</p><p>{{ copy.idea.goal }}</p>
            <ul class="goals-list"><li v-for="goal in copy.idea.goals" :key="goal">{{ goal }}</li></ul>
          </div>
          <div class="workflow">
            <h3>{{ copy.idea.stepsTitle }}</h3>
            <ol><li v-for="step in copy.idea.steps" :key="step.title"><h4>{{ step.title }}</h4><p>{{ step.description }}</p></li></ol>
          </div>
        </div>
      </section>
      <SamplePreview />
      <section class="future-section shell">
        <div class="planned" aria-labelledby="planned-heading">
          <h2 id="planned-heading">{{ copy.planned.title }}</h2><p>{{ copy.planned.description }}</p>
          <ul class="feature-list">
            <li v-for="feature in copy.planned.features" :key="feature.name">
              <div class="feature-heading"><h3>{{ feature.name }}</h3><span>{{ copy.planned.status }}</span></div><p>{{ feature.description }}</p>
            </li>
          </ul>
        </div>
        <div id="roadmap" class="roadmap" aria-labelledby="roadmap-heading">
          <h2 id="roadmap-heading">{{ copy.roadmap.title }}</h2>
          <ol class="roadmap-list">
            <li v-for="stage in copy.roadmap.stages" :key="stage.label">
              <span class="stage-label">{{ stage.label }}</span><div><h3>{{ stage.title }}</h3><p>{{ stage.description }}</p></div>
            </li>
          </ol>
        </div>
      </section>
      <section id="about" class="about-section" aria-labelledby="about-heading">
        <div class="shell about-grid">
          <div>
            <h2 id="about-heading">{{ copy.about.title }}</h2>
            <p class="about-introduction">{{ copy.about.introduction }}</p>
          </div>
          <div>
            <p>{{ copy.about.description }}</p>
            <p>{{ copy.about.purpose }}</p>
            <a class="text-link" href="#approach">{{ copy.about.approachAction }}</a>
          </div>
        </div>
      </section>
      <section id="approach" class="approach-section shell" aria-labelledby="approach-heading">
        <div class="approach-intro">
          <h2 id="approach-heading">{{ copy.approach.title }}</h2>
          <p>{{ copy.approach.description }}</p>
        </div>
        <ul class="principles-list">
          <li v-for="principle in copy.approach.principles" :key="principle.title">
            <h3>{{ principle.title }}</h3><p>{{ principle.description }}</p>
          </li>
        </ul>
      </section>
      <section id="beta" class="beta-section" aria-labelledby="beta-heading">
        <div class="shell beta-grid">
          <h2 id="beta-heading">{{ copy.beta.title }}</h2>
          <div>
            <p>{{ copy.beta.description }}</p><p>{{ copy.beta.access }}</p>
            <a class="text-link" href="#roadmap">{{ copy.beta.action }}</a>
          </div>
        </div>
      </section>
      <section id="faq" class="faq-section shell" aria-labelledby="faq-heading">
        <h2 id="faq-heading">{{ copy.faq.title }}</h2>
        <div class="faq-list"><details v-for="item in copy.faq.questions" :key="item.question"><summary>{{ item.question }}</summary><p>{{ item.answer }}</p></details></div>
      </section>
    </main>
    <footer class="site-footer shell">
      <span>{{ project.name }} by {{ project.brand }}</span>
      <nav :aria-label="copy.ui.companyNavigationLabel">
        <a v-for="item in copy.ui.companyLinks" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <a href="#top">{{ copy.ui.backToTop }}</a>
    </footer>
  </div>
</template>
