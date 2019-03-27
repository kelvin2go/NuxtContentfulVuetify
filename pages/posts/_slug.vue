<template>
  <Article :post="post" />
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Article from '~/components/article.vue'

const client = createClient()

export default {
  // `env` is available in the context object
  async asyncData ({ env, params }) {
    // const { post } = await client.getEntries({
    //   'content_type': env.CTF_BLOG_POST_TYPE_ID,
    //   'sys.id[slug]': params.slug
    // })
    // console.log(post)

    // return post
    console.log(params)
    return Promise.all([
      // client.getEntry( params.id )
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'sys.id[slug]': params.slug,
        'fields.slug[in]': params.slug
      })
    ]).then(([post]) => {
      // return data that should be available
      // in the template
      return {
        post: post.items[0]
      }
    }).catch(console.error)
  },
  components: {
    Article
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
.container {
  padding: 0;
}
</style>


<style scoped>
</style>
