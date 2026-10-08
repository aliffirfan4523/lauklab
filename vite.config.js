import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { metadata } from './src/content.js'

export default defineConfig({
  base: '/',
  publicDir: false,
  build: { outDir: 'public' },
  plugins: [
    vue(),
    {
      name: 'lauklab-metadata',
      transformIndexHtml() {
        return [
          { tag: 'title', children: metadata.title, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'description', content: metadata.description }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:title', content: metadata.title }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:description', content: metadata.description }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'theme-color', content: '#214F3D' }, injectTo: 'head' },
        ]
      },
    },
  ],
})
