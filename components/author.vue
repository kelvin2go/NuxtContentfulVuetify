<template>
  <v-list three-line v-if="author">
    <v-list-tile avatar>
      <v-list-tile-avatar>
        <img v-if="author.image" :src="author.image.fields.file.url + '?fit=scale&w=120&h=120'">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-if="author.name">{{author.name}} </v-list-tile-title>
        <v-list-tile-sub-title v-if="author.title">{{author.title}}{{author.company|company}}</v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="author.shortBio">{{author.shortBio}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    props: ['author'],
    created: function () {
    },
    computed: {
    },
    filters: {
      toDate: (date) => {
        return (new Date(date)).toDateString()
      },
      company: (name) => {
        if (!name) return ''
        return " @ " +name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list__tile {
    color: rgba(0,0,0,.54)!important;
    fill: rgba(0,0,0,.54)!important;
    .list__tile__title{
      font-size: 16px;
      font-weight: 400!important;
      color: rgba(0,0,0,.84)!important;
    }
  }
</style>
