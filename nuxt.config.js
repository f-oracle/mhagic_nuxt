export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mhagic-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'preconnect',  href: 'https://fonts.gstatic.com' },
    //   { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap' },
    //   { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap' },
    //   { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Quicksand:wght@300&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_vars.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
