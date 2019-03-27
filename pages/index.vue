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
                v-for="headline in headlines"
                :key="headline.title"
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img
                      v-if="headline.icon.src"
                      :src="headline.icon.src"
                      width="40"
                      height="40"
                    />
                    <font-awesome-icon
                      class="blue--text lighten-2"
                      v-if="headline.icon.faicon"
                      :icon="headline.icon.faicon"
                      size="2x"
                    />
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">{{headline.title}}</div>
                  </v-card-title>
                  <v-card-text>
                    <span v-html="headline.content"> </span>
                    <v-card-text
                      class="text-xs-center"
                      v-if="headline.icon.title"
                    >
                      <v-btn
                        outline
                        round
                        :color="headline.icon.color"
                        :href="headline.icon.link"
                        target="_blank"
                      >{{headline.icon.title}}</v-btn>
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
            justify-center
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
      headlines: [
        {
          title: 'Software Engineer',
          content: 'I work as Software Engineer Team Lead in GOGOVAN. I have 7+ years working experiences on developing web site, application, platform. Worked on real time ordering van services, editorial CMS, digital media websites. Projects likes: real time driver app,  around 147 million MAU website, 30k concurrent users registration site, 30k registered users e-store, live streaming, multi-platform API',
          icon: {
            title: '',
            src: '/img/kelvin.png',
            local: '',
            color: 'success',
            link: 'https://nuxtjs.org/'
          }
        },
        {
          title: 'Background',
          content: 'I was born in Hong Kong 🇭🇰, studying aboard in B.C. Canada 🇨🇦. Finishing up my B.S degree (Computer Science) at University of California, San Diego(UCSD) 🇺🇸. Currently, I have been living in Taiwan 🇹🇼 for 4 years. ',
          icon: {
            title: '',
            src: '',
            color: 'info',
            faicon: 'briefcase',
            link: 'https://vuetifyjs.com/en/'
          }
        },
        {
          title: 'Working Motto',
          content: 'Organizing clean project is alwasy my first prority. Work as team, and responsible. New challenges give me new ideas and motivations, and passion to work and learn new tech. Enjoy discussing programming and sharing latest tech.',
          icon: {
            title: '',
            src: '',
            faicon: 'user',
            color: 'error',
            link: 'https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/'
          }
        }
      ],
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
  ul {
    padding-left: 20px;
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
