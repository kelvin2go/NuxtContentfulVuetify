<template>
  <div class="padTop">
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="banner-title">The best way to start developing</h2>
            <span class="banner-subtitle">
              Tech solution for the business
            </span>
          </div>
        </v-flex>
        <v-flex xs12 class="midContainer">
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="/img/nuxt-logo.png" width="40" height="40"/>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">NUXT.js</div>
                  </v-card-title>
                  <v-card-text>
                    Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.
                    As a framework, Nuxt.js comes with a lot of features to help you in your development between the client side and the server side such as Asynchronous Data, Middleware, Layouts, etc.
                    <v-card-text class="text-xs-center">
                      <v-btn color="success" href="https://nuxtjs.org/" target="_blank">NUXT</v-btn>
                    </v-card-text>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="/img/vuetify-logo.svg" width="40" height="40"/>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Vuetify</div>
                  </v-card-title>
                  <v-card-text>
                    Semantic Material Components
                    Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
                    <v-card-text class="text-xs-center">
                      <v-btn color="info" href="https://vuetifyjs.com/en/" target="_blank">Vuetify</v-btn>
                    </v-card-text>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="/img/contentful-logo.svg" width="40" height="40"/>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Contentful</div>
                  </v-card-title>
                  <v-card-text>
                    Contentful provides a content infrastructure that enables teams to power content in any digital product.
                    nuxt + contentful have no harzzel on server content now. Fast. Flexible. Future-proof. It's everything your CMS isn't.
                    Developers work with the tools they love. Content creators work with the structure they need.
                    <v-card-text class="text-xs-center">
                      <v-btn color="error" href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/" target="_blank">Contentful</v-btn>
                    </v-card-text>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <Parallax />
    </section>
    <section>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm12 md12 class="my-3">
              <div class="text-xs-center">
                <h2 class="banner-title">TEAM</h2>
                <span class="banner-subtitle">
                  Get to know our amazing team here
                </span>
              </div>
            </v-flex>
            <v-flex xs8 md6 sm6 v-for="person in persons" :key="person.id">
              <PersonCard v-if="person" :person="person" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </section>
  </div>

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import AppLogo from '~/components/AppLogo.vue'
import Parallax from '~/components/parallax-sub.vue'
import PersonCard from '~/components/person-card.vue'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData ({env}) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_PERSON_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, persons]) => {
      // return data that should be available
      // in the template
      return {
        author: entries.items[0],
        persons: persons.items
      }
    }).catch(console.error)
  },
  components: {
    AppLogo,
    Parallax,
    PersonCard
  }
}
</script>

<style lang="scss" scoped="">
.padTop{
  padding-top: 456px;
}

.midContainer {
  .container {
    min-height: auto;
  }
}
.banner-title{
  font-size: 36px;
}
.banner-subtitle{
  padding-top: 10px;
  font-size: 18px;
}
</style>
