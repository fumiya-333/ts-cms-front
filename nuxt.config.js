const globImporter = require('node-sass-glob-importer')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TS-CMS',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  ssr: true,

  router: {
    middleware: ['router'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '@/assets/scss/style.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/libs/date-util',
    '@/libs/api-util',
    '@/libs/vuelidate',
    '@/libs/portal-vue',
    '@/libs/cookie-util',
    '@/libs/geolocation-util',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/device',
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
        ],
        defaultLocale: 'ja',
        langDir: 'i18n/',
        strategy: 'prefix_and_default',
        vueI18n: {
          fallbackLocale: 'ja',
        },
        vueI18nLoader: true,
        lazy: true,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(_config, { loaders: { scss } }) {
      const sassOptions = scss.sassOptions || {}
      sassOptions.importer = globImporter()
      scss.sassOptions = sassOptions
    },
  },
}
