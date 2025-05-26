// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],
  ui: {
    global: true
  },
  css: [
    '@/assets/css/main.css',],
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  app: {
    head: {
      title: 'Lumina - Smart Home Automation',
      meta: [
        { name: 'description', content: 'Smart home automation for the modern home' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})