<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12 style="min-height: 50px; position: relative">
      <v-btn
        absolute
        dark
        fab
        top
        right
        color="pink"
        @click="showFilter = !showFilter"
      >
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-flex xs12 sm12 md12 v-if="showFilter">
        <v-chip v-for="tag in filterTags.company" :key="tag.id" :close="pickedTags.indexOf(tag) !== -1" :outline="pickedTags.indexOf(tag) === -1" color="orange" @click="pushTags(tag)"><v-icon left>work</v-icon> {{tag}}</v-chip>
        <v-chip v-for="tag in filterTags.tags" :key="tag.id"  :close="pickedTags.indexOf(tag) !== -1" :outline="pickedTags.indexOf(tag) === -1" color="blue" @click="pushTags(tag)">{{tag}}</v-chip>
      </v-flex>
    </v-flex>

    <v-flex xs12 sm12 md12 class="swiper-inner">
      <!-- render showcase -->
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="showcase in filtersCase" :key="showcase.id">
            <Portfolio :portfolio="showcase" v-show="showcase.fields.show"/>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import VMarkdown from 'vue-markdown'
  import {createClient} from '~/plugins/contentful.js'
  import Portfolio from '~/components/portfolio-card.vue'

  const client = createClient()

  export default {
    data() {
      const self = this
      return {
        slideIndex: 0,
        long: false,
        showFilter: false,
        pickedTags: [],
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange: function () {
              self.slideIndex = this.activeIndex
            }
          }
        },
      }
    },
    computed: {
      filtersCase: function() {
        let filtered = []
        if (this.pickedTags.length > 0){
          Object.keys(this.showcases).forEach( (key) => {
            if( this.pickedTags.indexOf(this.showcases[key].fields.company) > -1 ||
            this.showcases[key].fields.tags.filter( (val) => -1 !== this.pickedTags.indexOf(val)).length > 0 ){
              filtered.push(this.showcases[key])
            }
          })
          return filtered
        }
        return this.showcases
      },
      filterTags: function(){
        let company = []
        let tags = []
        this.showcases.forEach( (val) => {
          if (company.indexOf(val.fields.company) === -1) {
            company.push(val.fields.company)
          }
          tags = tags.concat(val.fields.tags)
        })
        return {
          company,
          tags: Array.from(new Set(tags)).sort()
        };
      },
      currentCase: function() {
        return this.showcases[this.slideIndex] || null
      }
    },
    mounted() {
      this.mySwiper.slideTo(parseInt(this.showcases.length/2), 1000, false)
    },
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_PROTFOLIO_TYPE_ID,
          'fields.company[exists]': 'true',
          order: '-fields.date'
        })
      ]).then(([showcases]) => {
        // return data that should be available
        // in the template
        // const companyCases = showcases.items.filter(function (el) {
        //   return el.fields.company !== ''
        // })
        return {
          showcases: showcases.items
        }
      }).catch(console.error)
    },
    methods: {
      pushTags: function (tag) {
        if (this.pickedTags.indexOf(tag) === -1) {
          this.pickedTags.push(tag)
        } else {
          this.pickedTags.splice(this.pickedTags.indexOf(tag), 1)
        }
      }
    },
    components: {
      Portfolio,
      VMarkdown
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-inner {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;

    .swiper-container{
      padding-top: 20px;

      .swiper-pagination {
        width: 100% !important;
        top: 0;
        height: 10px;
      }
    }

    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      background-position: center;
      background-size: cover;

      position: relative;
      overflow: hidden;
      border-radius: 10px;
    }
  }
</style>
