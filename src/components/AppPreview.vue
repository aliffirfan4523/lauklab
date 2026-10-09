<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { copy } from '../content.js'
import cookLight from '../assets/app/cook-light.png'
import cookDark from '../assets/app/cook-dark.png'
import pantryLight from '../assets/app/pantry-light.png'
import pantryDark from '../assets/app/pantry-dark.png'
import recipeLight from '../assets/app/recipe-light.png'
import recipeDark from '../assets/app/recipe-dark.png'

const props = defineProps({ preference: { type: String, required: true } })
const selected = ref('cook')
const section = ref(null)
const scenes = []
const motionReady = ref(false)
const progress = ref(0)
const media = window.matchMedia('(prefers-color-scheme: dark)')
const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 56rem) and (min-height: 38rem)')
const systemDark = ref(media.matches)
const updateSystem = event => { systemDark.value = event.matches }
let observer
let frame = 0
let inView = false
let manualScroll = null
function selectScreen(id) {
  selected.value = id
  manualScroll = window.scrollY
}
function updateStory() {
  frame = 0
  if (!inView || !motionReady.value) return
  if (manualScroll !== null && Math.abs(window.scrollY - manualScroll) < 24) return
  manualScroll = null
  const center = window.innerHeight * .52
  let closest = 0
  let distance = Infinity
  scenes.forEach((element, index) => {
    if (!element) return
    const bounds = element.getBoundingClientRect()
    const nextDistance = Math.abs(bounds.top + bounds.height / 2 - center)
    if (nextDistance < distance) { closest = index; distance = nextDistance }
  })
  selected.value = copy.appPreview.screens[closest].id
  const bounds = section.value.getBoundingClientRect()
  progress.value = Math.round(Math.max(0, Math.min(1, -bounds.top / Math.max(1, bounds.height - window.innerHeight))) * 100) / 100
}
function requestFrame() {
  if (inView && motionReady.value && !frame) frame = window.requestAnimationFrame(updateStory)
}
function updateMotion() {
  motionReady.value = motion.matches && 'IntersectionObserver' in window
  if (!motionReady.value) progress.value = 0
  requestFrame()
}
onMounted(() => {
  media.addEventListener('change', updateSystem)
  motion.addEventListener('change', updateMotion)
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; requestFrame() })
    observer.observe(section.value)
  }
  updateMotion()
  window.addEventListener('scroll', requestFrame, { passive: true })
  window.addEventListener('resize', requestFrame)
})
onUnmounted(() => {
  media.removeEventListener('change', updateSystem)
  motion.removeEventListener('change', updateMotion)
  observer?.disconnect()
  window.cancelAnimationFrame(frame)
  window.removeEventListener('scroll', requestFrame)
  window.removeEventListener('resize', requestFrame)
})
const screen = computed(() => copy.appPreview.screens.find(item => item.id === selected.value))
const images = { cook: { light: cookLight, dark: cookDark }, pantry: { light: pantryLight, dark: pantryDark }, recipe: { light: recipeLight, dark: recipeDark } }
const theme = computed(() => (props.preference === 'system' ? systemDark.value : props.preference === 'dark') ? 'dark' : 'light')
</script>

<template>
  <section id="app-preview" ref="section" class="app-preview-section shell" :class="{ 'motion-ready': motionReady }" :style="{ '--phone-turn': `${(0.5 - progress) * 8}deg` }" aria-labelledby="app-preview-heading">
    <div class="app-preview-copy">
      <h2 id="app-preview-heading">{{ copy.appPreview.title }}</h2>
      <p>{{ copy.appPreview.description }}</p>
      <div class="screen-controls" role="group" :aria-label="copy.appPreview.navigationLabel">
        <button v-for="item in copy.appPreview.screens" :key="item.id" type="button" :aria-pressed="selected === item.id" aria-controls="app-screen" @click="selectScreen(item.id)">{{ item.label }}</button>
      </div>
      <p id="app-screen-caption" class="app-screen-caption" aria-live="polite">{{ screen.caption }}</p>
      <div class="preview-stories">
        <article v-for="(item, index) in copy.appPreview.screens" :key="item.id" :ref="element => { scenes[index] = element }" class="preview-scene" :class="{ 'scene-active': selected === item.id }">
          <h3>{{ item.heading }}</h3>
          <p>{{ item.caption }}</p>
        </article>
      </div>
    </div>
    <div class="app-preview-visual">
      <figure id="app-screen" class="app-phone" aria-describedby="app-screen-caption">
        <div class="phone-screens">
          <img v-for="item in copy.appPreview.screens" :key="item.id" :src="images[item.id][theme]" :alt="selected === item.id ? item.alt : ''" :aria-hidden="selected !== item.id" :class="{ 'screen-active': selected === item.id }" width="390" height="844" loading="lazy" decoding="async" />
        </div>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.app-preview-section { align-items: center; }
.app-preview-visual { min-width: 0; display: flex; justify-content: center; }
.app-phone { width: min(100%, 390px); }
.phone-screens { position: relative; aspect-ratio: 390 / 844; overflow: hidden; border-radius: 26px; background: var(--paper); }
.phone-screens img { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; }
.phone-screens .screen-active { opacity: 1; }
.preview-stories { display: none; }
@media (min-width: 56rem) and (min-height: 38rem) {
  .motion-ready { align-items: stretch; }
  .motion-ready .app-preview-copy { padding-top: 2rem; }
  .motion-ready .preview-stories { display: block; padding-block: 2rem 26svh; }
  .motion-ready .preview-scene { min-height: 45svh; display: flex; flex-direction: column; justify-content: center; gap: 1.2rem; border-top: 1px solid var(--border); }
  .preview-scene h3 { color: var(--muted); font-family: Georgia, serif; font-weight: 400; font-size: clamp(1.8rem, 3vw, 2.75rem); line-height: 1.12; max-width: 16ch; }
  .preview-scene p { color: var(--muted); max-width: 34ch; font-size: 1rem; }
  .preview-scene.scene-active h3 { color: var(--green); }
  .preview-scene.scene-active p { color: var(--ink); }
  .motion-ready .app-preview-visual { position: relative; display: block; }
  .motion-ready .app-phone { position: sticky; top: 10svh; width: min(100%, 350px, calc(78svh * 390 / 844)); margin-inline: auto; transform: perspective(1400px) rotateY(var(--phone-turn)); }
}
@media (prefers-reduced-motion: no-preference) {
  .phone-screens img { transition: opacity 300ms cubic-bezier(.16,1,.3,1); }
  .preview-scene h3, .preview-scene p { transition: color 250ms ease; }
}
@media (prefers-reduced-motion: reduce) {
  .app-phone { transform: none; }
}
</style>
