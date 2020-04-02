
export default {
  mode: 'universal',
  /*
   ** Webfont Loader Config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:100,300,800']
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'ULTR4 NBP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width initial-scale=1' },
      { name: 'keywords', content: 'Vue.js, Nuxt.js, Axios, PWA, Nuxt Webfont Loader, TailwindCSS, PurgeCSS, PostCSS Preset Env & ESLint.' },
      { hid: 'description', name: 'description', content: 'A Wicked Nuxt.js Boilerplate' },
      { hid: 'og:title', name: 'og:title', content: 'ULTR4 NBP - Nuxt.js Boilerplate' },
      { hid: 'og:description', name: 'og:description', content: 'A Wicked Nuxt.js Boilerplate' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
