<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar
          dark
          flat
        >
          <v-btn icon>
            <v-icon @click="$router.go(-1)">arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Blogs</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <!-- render blog posts -->
        <v-container
          fluid
          grid-list-sm
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              sm12
              md6
              v-for="post in posts"
              :key="post.id"
            >
              <article-preview :post="post">
              </article-preview>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData ({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([posts]) => {
      // return data that should be available
      // in the template
      return {
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    ArticlePreview
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
