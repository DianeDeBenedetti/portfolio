// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-13',
  devtools: { enabled: true },
  site: { indexable: false },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ], 
  
  css: ['~/assets/css/main.scss']
})