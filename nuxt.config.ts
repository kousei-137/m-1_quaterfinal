// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
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
    // baseURL: process.env.AUTH_ORIGIN,
    // provider: {
    //   type: 'auth-js'
    // },
  },
  runtimeConfig: {
    auth: {
      provider: {
        type: 'auth-js'
      },
      origin: process.env.AUTH_ORIGIN,
    },
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
    public: {
      TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID
    }
  },
})
