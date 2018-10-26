<template>
  <div>
    <!-- render blog posts -->
    <ul style="padding: 64px 0px 0px;">
      <li v-for="post in posts" :key="post.id">
        <article-preview :post="post"></article-preview>
      </li>
    </ul>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticlePreview from '~/components/article-preview.vue'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
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
