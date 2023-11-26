// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@nuxtjs/tailwindcss'],
  head: {
    htmlAttrs:{ lang: 'ja'},
    meta: [
      { name: 'google', content: 'notranslate' },
      { charset: 'utf-8' },
    ]
  },
  auth: {
    enableGlobalAppMiddleware: true,
    provider: {
      type: 'auth-js'
    },
    origin: 'https://green-tree-024348a00.4.azurestaticapps.net/'
  },
  runtimeConfig: {
    auth: {
      provider: {
        type: 'auth-js'
      }
    },
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
    public: {
      TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID
    }
  }
})
