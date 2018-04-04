<template>
  <v-card color="cyan darken-2" class="white--text" v-if="'fields' in person">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{person.fields.name}}</div>
            <h5>{{person.fields.title}}, {{person.fields.company}}</h5>
            <div>{{person.fields.shortBio}}</div>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-card-media
            :src="person.fields.image.fields.file.url + '?fit=scale&h=125'"
            height="125px"
            contain
          ></v-card-media>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-card-actions class="actions">
            <v-btn flat v-if="person.fields.facebook" color="white" :href="baseURL.facebook+person.fields.facebook" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="2x"/></v-btn>
            <v-btn flat v-if="person.fields.linkedIn" color="white" :href="baseURL.linkedin+person.fields.linkedIn" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></v-btn>
            <v-btn flat v-if="person.fields.github" color="white" :href="baseURL.github+person.fields.github" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2x"/></v-btn>
            <v-btn flat v-if="person.fields.twitter" color="white" :href="baseURL.twitter+person.fields.twitter" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" size="2x"/></v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        baseURL: {
          facebook: 'https://facebook.com/',
          linkedin: 'https://www.linkedin.com/in/',
          github: 'https://github.com/',
          twitter: 'https://twitter.com/',
        }
      }
    },
    props: ['person']
  }
</script>

<style>
  h5 {
    font-style: italic;
    font-size: 16px
  }
  .actions{
    padding-top: 9px;
  }
</style>
