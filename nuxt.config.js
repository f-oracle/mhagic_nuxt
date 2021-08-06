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
    ],


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
      // https://go.nuxtjs.dev/tailwindcss

      '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: 'http://138.68.141.55/api/v1/',
  },

  auth: {
    redirect: {
      login: '/',
      home: '/home'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 43200
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: {url: 'login', method: 'post'},
          logout: {url: 'logout', method: 'get'},
          user: false
        }
      }
    }
  },
  // router: {
  //   middleware: ['auth']
  // },


  styleResources: {
    scss: [
      '~/assets/scss/_vars.scss'
    ]
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }


}
