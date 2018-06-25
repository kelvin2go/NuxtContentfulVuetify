<template>
  <v-layout row wrap>
    <v-flex xs12>
      <Author :author="author" />
    </v-flex>
    <v-flex xs12>
      <v-card flat class="section-content">
        <h1>{{content.title}}</h1>
        <img v-if="content.heroImage" :src="content.heroImage.fields.file.url" alt="avatar" class="responsive">
        <div class="content" v-if="content.body">
          <VMarkdown>{{content.body}}</VMarkdown>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Author from '~/components/author.vue'
  import VMarkdown from 'vue-markdown'

  export default {
    props: ['post'],
    created: function () {
    },
    computed: {
      author: function() {
        if (this.post) return this.post.fields.author.fields
      },
      content: function() {
        return this.post && this.post.fields || {}
      }
    },
    filters: {
      toDate: (date) => {
        return (new Date(date)).toDateString()
      },
      company: (name) => {
        if (!name) return ''
        return " in " +name
      }
    },
    components: {
      Author,
      VMarkdown
    }
  }
</script>

<style lang="scss" >
  .section-content {
    font-size: 18px;
    color: rgba(0,0,0,.84);
    font-weight: 400;
    line-height: 1.58;
    letter-spacing: -.004em;

    h1 {
      font-weight: 600 !important;
      font-size: 34px !important;
    }

    h2{
      font-size: 22px !important;
    }
  }
</style>
