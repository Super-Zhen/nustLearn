const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js' }
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
    '~assets/css/main.css',
    '~static/font/iconfont.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/mint-ui' },
    { src: '~static/font/iconfont.js', ssr: false },
    { src: '~assets/css/base.scss', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 75
    //   })
    // ],
    postcss: function () {
      return [require('postcss-px2rem')({ remUnit: 75 })] // 设置基准值，75是以iphone6的标准
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
