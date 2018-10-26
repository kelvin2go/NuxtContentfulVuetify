<template>
  <v-container fluid grid-list-md>
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

      <v-flex xs12 sm6 md6 v-for="showcase in filtersCase" :key="showcase.sys.id">
        <v-card>
          <a :href="showcase.fields.url" target="_blank">
            <v-img
              v-if="showcase.fields.heroImage"
              class="white--text"
              height="340"
              width="360"
              :src="showcase.fields.heroImage.fields.file.url + '?fit=scale&w=720'"
            >
            </v-img>
          </a>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{showcase.fields.title | cap }}</div>
              <span class="grey--text"><v-icon class="grey--text">date_range</v-icon>{{ showcase.fields.date | getFullYear}}</span><br>
              <VMarkdown :source="showcase.fields.description"></VMarkdown>
            </div>
          </v-card-title>
          <v-card-actions>
            <a :href="showcase.fields.url" target="_blank">
              <v-btn flat color="orange">
                <v-icon class="pink--text">launch</v-icon> DEMO
              </v-btn>
            </a>
            <a v-if="showcase.fields.github" :href="showcase.fields.github" target="_blank">
              <v-btn flat color="orange">
                <font-awesome-icon :icon="['fab', 'github']"/>  Github
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import VMarkdown from 'vue-markdown'
  import {createClient} from '~/plugins/contentful.js'
  import Portfolio from '~/components/portfolio-card.vue'

  const client = createClient()

  export default {
    data: function () {
      const self = this
      return {
        showFilter: false,
        pickedTags: [],
        show: {}
      }
    },
    computed: {
      filtersCase: function() {
        let filtered = []
        if (this.pickedTags.length > 0){
          Object.keys(this.showcases).forEach( (key) => {
            if(this.showcases[key].fields.tags.filter( (val) => -1 !== this.pickedTags.indexOf(val)).length > 0 ){
              filtered.push(this.showcases[key])
            }
          })
          return filtered
        }
        return this.showcases
      },
      filterTags: function(){
        let tags = []
        this.showcases.forEach( (val) => {
          tags = tags.concat(val.fields.tags)
        })
        return {
          tags: Array.from(new Set(tags)).sort()
        };
      }
    },
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_PROTFOLIO_TYPE_ID,
          'fields.company[exists]': 'false',
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
      setShow: function(id){
        this.$set(this.show, id, !this.show[id] )
      },
      pushTags: function (tag) {
        if (this.pickedTags.indexOf(tag) === -1) {
          this.pickedTags.push(tag)
        } else {
          this.pickedTags.splice(this.pickedTags.indexOf(tag), 1)
        }
      }
    },
    filters: {
      getFullYear: (date) => {
        return (new Date(date)).getFullYear()
      },
      cap: (str) => {
        return str.replace(/\w\S*/g, function(tStr)	{
          return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase()
        })
      }
    },
    components: {
      Portfolio,
      VMarkdown
    }
  }
</script>

<style lang="scss" scoped>
  .headline {
    font-size: 22px;
  }
</style>
