<template>
  <v-parallax class="parallaxMain" src="/img/hero1.jpg" height="520" >
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <v-flex xs12 md12 >
        <h1 class="main-title text-xs-center">{{mainTitle}}</h1>
      </v-flex>
      <v-flex xs12 md4 offset-md1 class="text-xs-center"> WE ARE </v-flex >
      <v-flex xs12 md6 class="rw-words rw-words-1 text-xs-center ">
        <v-flex xs6 v-for="header in subHeader" :key="header">{{header}}</v-flex>
      </v-flex>
      <v-flex xs12 md12 >
        <v-btn
          class="white white--text"
          dark
          large
          href="/posts"
          outline round

        >
          {{btnText}}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        mainTitle: 'FULL WEBSITE SOLUTIONS',
        subTitle: 'Web & Mobile development',
        btnText: 'Get Started',
        subHeader: ['Solution provider', 'EStore', 'blockchain', 'Tech Solution']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .parallaxMain {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    width: 100%;
    z-index: 100;
    position: absolute;
    top: -62px;
    .main-title {
      letter-spacing: 6px;
      text-align: center;
      font-size: 50px;
      font-weight: 400;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(0,0,0,.3);
      line-height: 46px;
      padding-bottom: 20px;
      text-transform: uppercase;
    }
    .sub-title{
      text-align: center;
      font-size: 26px;
      font-weight: 300;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(0,0,0,.3);
      line-height: 20px;
      padding-bottom: 20px;
      font-style: italic;
    }
  }
</style>
