<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
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
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <a href="/"><v-toolbar-title v-text="title"></v-toolbar-title></a>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span> <a href="https://github.com/kelvin2go/"> Kelvin Ho</a> - 2018 </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'view_module', title: 'Posts example', to: '/posts' },
          { icon: 'view_module', title: 'Posts example', to: '/posts' },
        ],
        itemsExt: [
          { icon: 'view_module', title: 'Kelvin Git', to: 'https://github.com/kelvin2go', target: '_blank' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'NuxtContenful'
      }
    }
  }
</script>

<style scoped>
  a, a:link, a:visited {
    color: #e3f3ef;
    text-decoration: none;
  }
</style>
