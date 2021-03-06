export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cryptodiac',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cryptodiac Zodiac NFT' },
      { hid: 'og:title', name: 'og:title', content: 'Cryptodiac Zodiac NFT' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'cryptodiac.com' },
      { hid: 'og:type', name: 'og:type', content: 'article' },
      { hid: 'og:image', property: 'og:image', content: 'https://github.com/cryptodiac-team/cryptodiac.com/blob/main/static/header.png?raw=true' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel : "preconnect" ,href:"https://fonts.gstatic.com"},
      { href:"https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" ,rel:"stylesheet"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
