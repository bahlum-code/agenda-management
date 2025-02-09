// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    "@nuxt/eslint",
    'nuxt-headlessui',
    '@pinia/nuxt',
    "@nuxt/icon"
  ],
  runtimeConfig:{
    public:{
      apiUrl: process.env.API_URL
    }
  },
  pinia: {
    autoImports: ['defineStore'],
  },
  headlessui: {
    prefix: 'Headless'
    },
  typescript: {
      typeCheck: false
    },
    imports: {
      dirs: ['./utils/types']
    },
  vite: {
    server: {
      host: true,
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  }
})