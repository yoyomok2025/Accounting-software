// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'INE tracker',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'Content-Type', charset: 'text/html; charset=utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
        { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#6366F1' },
        { name: 'theme-color', content: '#0F172A' },
        { property: 'og:title', content: 'INE tracker' },
        {
          property: 'og:description',
          content: 'This is a side project for accounting application.',
        },
        {
          property: 'twitter:description',
          content: 'This is a side project for accounting application.',
        },
        {
          name: 'DC.Description',
          content: 'This is a side project for accounting application.',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'dayjs-nuxt'],
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          api: 'modern-compiler',
        },
      },
    },
  },
});
