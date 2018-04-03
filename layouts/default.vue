<template>
  <v-app>
    <v-toolbar dark fixed app :clipped-left="clipped" v-on:scroll="handleScroll" v-bind:class="{solid: this.scroll > 48}">
      <a id="brand" href="/"><v-toolbar-title class="titleText" v-text="title"></v-toolbar-title></a>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <section v-if="$route.path == '/'">
        <Parallax />
        <nuxt />
      </section>
      <v-container v-else>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      :right="right"
      v-model="rightDrawer"
      fixed
      app
      dark
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>Externals</v-subheader>
        <v-list-tile avatar v-for="item in itemsExt" :key="item.title" :href="item.to" :target="item.target">
          <v-list-tile-avatar>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>Actions</v-subheader>
        <v-list-tile>
          <v-btn
            icon
            @click="miniVariant = !miniVariant"
          >
            <v-icon>photo_size_select_small</v-icon>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer class="blue lighten-4">
       <v-layout row wrap align-center>
         <v-flex xs12>
           <div class="white--text ml-3">
             Made with
             <v-icon class="red--text">favorite</v-icon>
             by <a href="https://github.com/kelvin2go/"> Kelvin Ho</a> - 2018
           </div>
         </v-flex>
       </v-layout>
     </v-footer>

  </v-app>
</template>

<script>
  import Parallax from '~/components/parallax-main.vue'
  import ParallaxSub from '~/components/parallax-sub.vue'

  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        scroll: 0,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'library_books', title: 'Posts', to: '/posts' },
          { icon: 'view_module', title: 'Posts example', to: '/posts' },
        ],
        itemsExt: [
          { icon: 'view_module', title: 'Kelvin Git', to: 'https://github.com/kelvin2go', target: '_blank' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'NUXTENTFUL'
      }
    },
    methods: {
      handleScroll () {
        this.scroll = window.scrollY
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    components: {
      Parallax,
      ParallaxSub,
    }
  }
</script>

<style lang="scss" scoped>

  a, a:link, a:visited {
    color: #63b5f7;
    text-decoration: none;
    &#brand {
      color: #fff;
      border: 1px solid #fff;
      padding: 4px;
    }
    .toolbar__title {
      margin-left: 0px;
    }
  }

  .parallax{
    position: absolute;
    top: 0;
  }



  #app .toolbar {
    background: rgba(18, 21, 20, 0.3);
    &.solid{
      background: rgba(18, 21, 20, 0.85);
    }
    font-family: Raleway, Helvetica, Arial, sans-serif;
  }
</style>
