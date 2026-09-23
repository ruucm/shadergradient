import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  compatibilityDate: '2026-09-08',
  telemetry: false,
  app: {
    head: {
      title: 'ShaderGradient Nuxt Starter',
      htmlAttrs: { lang: 'en' },
    },
  },
})