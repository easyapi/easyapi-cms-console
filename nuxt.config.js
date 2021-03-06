module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }} - EasyAPI服务市场',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },
  css: [
    '@/assets/scss/common.scss',
    '@/assets/scss/element-variables.scss',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    { src: '@/plugins/nuxt-quill-plugin', ssr: false },
    { src: '@/plugins/commom.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  modules: [
    '@nuxtjs/axios'
  ],
  router: {
    base: '/console/'
  },
  axios: {},
  loading: {
    color: '#3B8070'
  },
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/, 'vue-quill-editor'],
    extend(config, ctx) {
    },
    maxChunkSize: 300000, // 单个包最大尺寸
    extractCSS: true // 单独提取CSS
  },
  server: {
    port: 3000
  }
}
