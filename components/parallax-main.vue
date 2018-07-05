<template>
  <v-parallax src="/img/hero1.jpg" height="520" >
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <h1 class="main-title text-xs-center">{{mainTitle}}</h1>
      <div class="sub-title mb-3 text-xs-center">{{subTitle}}</div>
      <v-btn
        class="white"
        dark
        large
        href="/posts"
        outline round
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
        mainTitle: 'FULL WEBSITE SOLUTIONS',
        subTitle: 'Web & Mobile development',
        btnText: 'Get Started',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parallax {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    width: 100%;
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
