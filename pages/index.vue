<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <app-logo/>
      </div>
      <v-card>
        <v-card-title primary-title class="text-xs-center">
          <h1 class="text-xs-center">Website Template</h1>
        </v-card-title>
        <v-card-text>
          <p>Nuxtjs + Contenful + Vuetify</p>
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
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
</style>
