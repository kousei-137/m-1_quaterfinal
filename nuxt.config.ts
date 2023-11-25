// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  head: {
    htmlAttrs:{ lang: 'ja'},
    meta: [
      { name: 'google', content: 'notranslate' },
      { charset: 'utf-8' },
    ]
  }
})
