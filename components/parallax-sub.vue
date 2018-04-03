<template>
  <v-parallax src="/img/hero3.jpg" height="380">
   <v-layout column align-center justify-center>
     <div class="headline white--text mb-3 text-xs-center">{{mainTitle}}</div>
     <em>{{subTitle}}</em>
     <v-btn
       class="blue lighten-2 mt-5"
       dark
       large
       href="/posts"
     >
       {{btnText}}
     </v-btn>
   </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        mainTitle: 'Web development has never been easier',
        subTitle: 'Kick-start your application today',
        btnText: 'Get Started',
      }
    }
  }
</script>

<style lang="scss">
  .parallax {
    font-family: Raleway, Helvetica, Arial, sans-serif;
  }
</style>
