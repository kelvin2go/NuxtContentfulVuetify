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
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
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
                    <v-btn color="success" href="https://nuxtjs.org/" target="_blank">NUXT</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="/img/vuetify-logo.svg" width="40" height="40"/>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Semantic Material Components
                    Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
                    <v-btn color="info" href="https://vuetifyjs.com/en/" target="_blank">Vuetify</v-btn>
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
                    nuxt + contentful have no harzzel on server content now.
                    <v-btn color="error" href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/" target="_blank">Contentful</v-btn>
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
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm8 md6>
            <div class="text-xs-center">
              <app-logo/>
            </div>
            <v-card>
              <v-card-title primary-title class="text-xs-center">
                <h1 class="text-xs-center">Website Template</h1>
              </v-card-title>
              <v-card-text>
                <p>Nuxtjs + Contentful + Vuetify</p>
                <p><v-btn flat color="orange" href="/posts">blog example</v-btn></p>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="green" href="https://nuxtjs.org/" target="_blank">Nuxt</v-btn>
                <v-btn flat color="green" href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/" target="_blank">Contentful</v-btn>
                <v-btn flat color="green" href="https://vuetifyjs.com/en/" target="_blank">Vuetify</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm8 md6>
            <div class="text-xs-center">
              <app-logo/>
            </div>
            <v-card>
              <v-card-title primary-title class="text-xs-center">
                <h1 class="text-xs-center">Website Template</h1>
              </v-card-title>
              <v-card-text>
                <p>Nuxtjs + Contentful + Vuetify</p>
                <p><v-btn flat color="orange" href="/posts">blog example</v-btn></p>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="green" href="https://nuxtjs.org/" target="_blank">Nuxt</v-btn>
                <v-btn flat color="green" href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/" target="_blank">Contentful</v-btn>
                <v-btn flat color="green" href="https://vuetifyjs.com/en/" target="_blank">Vuetify</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
         </v-layout>
      </v-container>
    </section>
  </div>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Parallax from '~/components/parallax-sub.vue'

export default {
  components: {
    AppLogo,
    Parallax
  }
}
</script>

<style lang="scss">
.padTop{
  padding-top: 456px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.midContainer {
  .container {
    min-height: auto;
  }
}
</style>
