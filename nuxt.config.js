const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_PERSON_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID',
  'CTF_PROTFOLIO_TYPE_ID'
])
console.log(ctfConfig)
console.log(process.env)

const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kelvin2go',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'kelvinho.js.org personal website ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/style/app.styl',
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    '~/plugins/contentful',
    '~/plugins/vuetify',
    '~/plugins/fontawesome',
    { src: '~/plugins/vue-awesome-swiper', ssr: false},
  ],
  modules: [
    ['@nuxtjs/google-tag-manager',{
      id: 'GTM-PL9TSHZ',
      layer: 'dataLayer',
      pageTracking: true,
    }]
  ],
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
      .then(([entries, postType]) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/posts/${entry.fields.slug}`),
          // map all possible tags to URLs
        ]
      })
    }
  },
  /*
  ** Define environment variables being available
  ** in generate and browser context
  */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_CMA_ACCESS_TOKEN: ctfConfig.CTF_CMA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_PERSON_TYPE_ID: ctfConfig.CTF_PERSON_TYPE_ID,
    CTF_PROTFOLIO_TYPE_ID: ctfConfig.CTF_PROTFOLIO_TYPE_ID
  }
}
