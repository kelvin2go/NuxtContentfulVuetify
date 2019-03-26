<template>
  <div class="sec-container">
    <section>
      <v-layout
        row
        wrap
        align-center
        justify-center
        fill-height
      >
        <v-flex
          xs10
          class="midContainer"
        >
          <v-container grid-list-xl>
            <v-layout
              row
              wrap
              align-center
            >
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img
                      src="/img/nuxt-logo.png"
                      width="40"
                      height="40"
                    />
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">NUXT.js</div>
                  </v-card-title>
                  <v-card-text>
                    Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.
                    As a framework, Nuxt.js comes with a lot of features to help you in your development between the client side and the server side such as Asynchronous Data, Middleware, Layouts, etc.
                    <v-card-text class="text-xs-center">
                      <v-btn
                        outline
                        round
                        color="success"
                        href="https://nuxtjs.org/"
                        target="_blank"
                      >NUXT</v-btn>
                    </v-card-text>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img
                      src="/img/vuetify-logo.svg"
                      width="40"
                      height="40"
                    />
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Vuetify</div>
                  </v-card-title>
                  <v-card-text>
                    Semantic Material Components
                    Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
                    <v-card-text class="text-xs-center">
                      <v-btn
                        outline
                        round
                        color="info"
                        href="https://vuetifyjs.com/en/"
                        target="_blank"
                      >Vuetify</v-btn>
                    </v-card-text>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img
                      src="/img/contentful-logo.svg"
                      width="40"
                      height="40"
                    />
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Contentful</div>
                  </v-card-title>
                  <v-card-text>
                    Contentful provides a content infrastructure that enables teams to power content in any digital product.
                    nuxt + contentful have no harzzel on server content now. Fast. Flexible. Future-proof. It's everything your CMS isn't.
                    Developers work with the tools they love. Content creators work with the structure they need.
                    <v-card-text class="text-xs-center">
                      <v-btn
                        outline
                        round
                        color="error"
                        href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/"
                        target="_blank"
                      >Contentful</v-btn>
                    </v-card-text>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex>
          <div>
            <div
              v-swiper:mySwiper="swiperOption"
              class="swiper"
            >
              <div
                class="parallax-bg"
                slot="parallax-bg"
                data-swiper-parallax="-23%"
              ></div>
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, i) in quotes"
                  :key="`swiper-${i}`"
                >
                  <v-layout
                    align-end
                    justify-space-around
                    row
                    fill-height
                  >
                    <v-flex
                      xs5
                      class="title"
                      data-swiper-parallax="-100"
                    >{{item.author}}</v-flex>
                    <v-flex
                      xs2
                      class="subtitle"
                      data-swiper-parallax="-200"
                    ></v-flex>
                    <v-flex
                      xs5
                      class="text display-1 font-weight-medium font-italic"
                      data-swiper-parallax="-300"
                    >
                      "{{item.text}}"
                    </v-flex>
                  </v-layout>
                </div>
              </div>
              <div
                class="swiper-pagination swiper-pagination-white"
                slot="pagination"
              ></div>
              <div
                class="swiper-button-prev swiper-button-white"
                slot="button-prev"
              ></div>
              <div
                class="swiper-button-next swiper-button-white"
                slot="button-next"
              ></div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs10
              md4
              sm4
              offset-xs1
              v-for="person in persons"
              :key="person.id"
            >
              <PersonCard
                v-if="person"
                :person="person"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </section>
    <section>
      <Parallax />
    </section>

  </div>

</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import AppLogo from '@/components/AppLogo.vue'
import Parallax from '@/components/parallax-sub.vue'
import PersonCard from '@/components/person-card.vue'

const client = createClient()

export default {
  data () {
    return {
      swiperOption: {
        speed: 2000,
        parallax: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      quotes: [
        { text: 'We\'re just enthusiastic about what we do.', author: 'Steve Jobs' },
        { text: 'The further you get away from yourself, the more challenging it is. Not to be in your comfort zone is great fun.', author: 'Benedict Cumberbatch' },
        { text: 'You never fail until you stop trying.', author: 'Albert Einstein' },
        { text: 'You can never solve a problem on the level on which it was created.', author: 'Albert Einstein' },
        { text: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.', author: 'Albert Einstein' },
        { text: 'If you want to live a happy life, tie it to a goal, not to people or things.', author: 'Albert Einstein' },
        { text: 'If we want to change the world, we change ourselves ... Change the world is maybe Obama\'s job.', author: 'Jack Ma' }
      ]
    }
  },
  // `env` is available in the context object
  asyncData ({ env }) {
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

<style lang="scss" scoped>
.sec-container {
  margin-top: 520px;
}
.midContainer {
  border-radius: 5px;
  background-color: #fff;
  width: 90%;
  margin: -120px auto 0;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.16);
  z-index: 200;
  .container {
    min-height: auto;
  }
}
.banner-title {
  font-size: 36px;
}
.banner-subtitle {
  padding-top: 10px;
  font-size: 18px;
}

.swiper {
  margin-top: -230px;
  padding-top: 230px;
  text-align: center;
  font-size: 38px !important;
  font-weight: 700 !important;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 500px;

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    .title {
      font-size: 41px !important;
      font-weight: 300 !important;
      background: rgba(128, 128, 128, 0.3);
      border-radius: 5px;
      color: #fff;
    }
    .subtitle {
      font-size: 28px !important;
    }
    .text {
      max-width: 400px !important;
      line-height: 1.3 !important;
      background: rgba(128, 128, 128, 0.3);
      border-radius: 5px;
    }
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-position-y: -70px;
    background-image: url(https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80);
  }
}
</style>
