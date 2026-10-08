<script setup>
import { copy, earlyAccessHref, navigation, project, sample } from './content.js'
import SamplePreview from './components/SamplePreview.vue'
</script>

<template>
  <div id="top" class="lauklab-page">
    <a class="skip-link" href="#main">{{ copy.ui.skipLink }}</a>
    <header class="site-header shell">
      <a class="wordmark" href="#top" :aria-label="project.name + ' by ' + project.brand">
        {{ project.name }}<span>by {{ project.brand }}</span>
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
    </header>
    <main id="main">
      <section class="hero shell" aria-labelledby="hero-heading">
        <div class="hero-copy">
          <p class="eyebrow">{{ copy.hero.status }}</p>
          <h1 id="hero-heading">{{ copy.hero.headline }}</h1>
          <p class="hero-description">{{ copy.hero.description }}</p>
          <div class="hero-actions">
            <a class="button" href="#preview">{{ copy.hero.previewAction }}</a>
            <a class="text-link" :href="earlyAccessHref">{{ copy.hero.contactAction }}</a>
          </div>
          <p class="email-note">{{ copy.hero.emailNote }}</p>
        </div>
        <aside class="pantry-note" aria-labelledby="pantry-heading">
          <h2 id="pantry-heading">{{ copy.hero.pantryTitle }}</h2>
          <p>{{ copy.hero.pantryIntro }}</p>
          <ul class="pantry-list"><li v-for="ingredient in sample.ingredients" :key="ingredient.id">{{ ingredient.label }}</li></ul>
          <div class="scenario"><span>{{ copy.ui.servings }}</span><span>{{ copy.ui.time }}</span><span>{{ copy.ui.equipment }}</span></div>
          <p class="pantry-footnote">{{ copy.hero.pantryFooter }}</p>
        </aside>
      </section>
      <section id="idea" class="idea-section" aria-labelledby="idea-heading">
        <div class="shell idea-grid">
          <div>
            <p class="eyebrow">{{ copy.idea.label }}</p>
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
          <p class="eyebrow">{{ copy.planned.label }}</p><h2 id="planned-heading">{{ copy.planned.title }}</h2><p>{{ copy.planned.description }}</p>
          <ul class="feature-list">
            <li v-for="feature in copy.planned.features" :key="feature.name">
              <div class="feature-heading"><h3>{{ feature.name }}</h3><span>{{ copy.planned.status }}</span></div><p>{{ feature.description }}</p>
            </li>
          </ul>
        </div>
        <div id="roadmap" class="roadmap" aria-labelledby="roadmap-heading">
          <p class="eyebrow">{{ copy.roadmap.label }}</p><h2 id="roadmap-heading">{{ copy.roadmap.title }}</h2>
          <ol class="roadmap-list">
            <li v-for="stage in copy.roadmap.stages" :key="stage.label">
              <span class="stage-label">{{ stage.label }}</span><div><h3>{{ stage.title }}</h3><p>{{ stage.description }}</p></div>
            </li>
          </ol>
        </div>
      </section>
      <section class="about-section" aria-labelledby="about-heading">
        <div class="shell about-grid">
          <div><p class="eyebrow">{{ copy.about.label }}</p><h2 id="about-heading">{{ copy.about.title }}</h2></div>
          <div><p>{{ copy.about.description }}</p><a class="text-link" :href="project.portfolioUrl">{{ copy.contact.portfolioAction }}</a></div>
        </div>
      </section>
      <section class="faq-section shell" aria-labelledby="faq-heading">
        <h2 id="faq-heading">{{ copy.faq.title }}</h2>
        <div class="faq-list"><details v-for="item in copy.faq.questions" :key="item.question"><summary>{{ item.question }}</summary><p>{{ item.answer }}</p></details></div>
      </section>
      <section id="contact" class="contact-section" aria-labelledby="contact-heading">
        <div class="shell contact-inner">
          <p class="eyebrow">{{ copy.contact.label }}</p><h2 id="contact-heading">{{ copy.contact.title }}</h2><p>{{ copy.contact.description }}</p>
          <a class="button button-light" :href="earlyAccessHref">{{ copy.contact.action }}</a><p class="contact-note">{{ copy.contact.note }}</p>
          <a class="contact-email" :href="'mailto:' + project.email">{{ project.email }}</a>
        </div>
      </section>
    </main>
    <footer class="site-footer shell">
      <span>{{ project.name }} by {{ project.brand }}</span><a :href="project.portfolioUrl">{{ copy.contact.portfolioAction }}</a><a href="#top">{{ copy.ui.backToTop }}</a>
    </footer>
  </div>
</template>
