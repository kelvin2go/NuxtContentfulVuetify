<template>
  <v-card v-if="'fields' in person" >
    <v-img
      :src="person.fields.image.fields.file.url + '?fit=scale&h=440'"
      height="220px"
      contain
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{person.fields.name}}</h3>
        <h5>{{person.fields.title}}, {{person.fields.company}}</h5>
        <div>{{person.fields.shortBio}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-card-actions class="actions">
        <v-btn class="black--text" flat small fab v-if="person.fields.facebook" :href="baseURL.facebook+person.fields.facebook" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" :mask="['far', 'circle']" size="2x"/></v-btn>
        <v-btn class="black--text" flat small fab v-if="person.fields.linkedIn" :href="baseURL.linkedin+person.fields.linkedIn" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></v-btn>
        <v-btn class="black--text" flat small fab v-if="person.fields.github" :href="baseURL.github+person.fields.github" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2x"/></v-btn>
        <v-btn class="black--text" flat small fab v-if="person.fields.twitter" :href="baseURL.twitter+person.fields.twitter" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" size="2x"/></v-btn>
      </v-card-actions>
    </v-card-actions>
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

<style lang="scss" >
  h5 {
    font-style: italic;
    font-size: 16px
  }
  .actions{
    padding-top: 9px;
    color: #C10C00;
  }
  .card{
    min-width: 300px;
    min-height: 450px;
  }
</style>
