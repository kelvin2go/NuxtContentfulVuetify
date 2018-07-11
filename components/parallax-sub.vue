<template>
  <v-parallax src="/img/hero3.jpg" height="380">
   <v-layout column align-center justify-center>
     <div class="headline white--text mb-3 text-xs-center">{{mainTitle}}</div>
     <em>{{subTitle}}</em>
     <v-btn
       class="mt-5"
       dark
       large
         outline round
       href="/showcases"
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
        mainTitle: 'What I LOVE? ',
        subTitle: '🍿 Movie, MARVEL, 🏸 badminton, 🐟 Aquarium, IOT,  Web platform',
        btnText: 'KNOW MORE',
      }
    }
  }
</script>

<style lang="scss">
  .parallax {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    z-index: 100;
    font-size: 28px;
    .headline{
      font-size: 38px;
    }

  }
</style>
