import { readingTime } from 'reading-time-estimator'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
       title: 'Gabrielle Brooks',
    meta: [
    //   ...meta,
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
    }
  },
  css: [
    '@/assets/css/global.css',
    // 'node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  devtools: { enabled: true },
   modules: ['@nuxt/content', '@nuxtjs/color-mode', 'nuxt-font-loader', '@nuxtjs/cloudinary',],
   plugins: ['@/plugins/youtube.client.js'],
})
