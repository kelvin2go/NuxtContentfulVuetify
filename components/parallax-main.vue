<template>
  <v-parallax class="parallaxMain" src="/img/hero1.jpg" height="520" >
    <v-layout
      wrap
      row
      justify-center
      align-center
      align-content-center
      class="white--text rw-wrapper text-xs-center"
    >
      <v-flex xs12 md12 >
        <h1 class="main-title text-xs-center">{{mainTitle}}</h1>
      </v-flex>
      <v-flex xs12 md4 offset-md1 class="text-xs-center"> $KelvinHo = </v-flex >
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
        mainTitle: 'Hello world',
        subTitle: 'software engineer 👨‍💻, web developer 🌐, tech fans 📦, computer geek 💻, codealholic 🔠, father 👨‍👩‍👦‍👦 ',
        btnText: 'FOLLOW ME',
      }
    },
    computed: {
      subHeader: function() {
        return this.subTitle.split(',')
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

    .rw-wrapper {
    	position: relative;
      margin: 30px auto 0 auto;
    	text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
      font-size: 38px;

      > div {
        min-height: 50px;
      }

      .rw-words{
        position: relative;

        div {
        	opacity: 0;
        	white-space: nowrap;
          position: absolute;
          top:0;
          left: 0;
          font-size: 28px;
        }
      }

      .rw-words-1 div{
      	opacity: 0;
      	color: #9cdede;
      	-webkit-animation: rotateWord 35s linear infinite 0s;
      	-ms-animation: rotateWord 35s linear infinite 0s;
      	animation: rotateWord 35s linear infinite 0s;
        min-height: 50px;
      }
      .rw-words-1 div:nth-child(2) {
        -webkit-animation-delay: 5s;
      	-ms-animation-delay: 5s;
      	animation-delay: 5s;
        color: #f3b7f9;
      }
      .rw-words-1 div:nth-child(3) {
        -webkit-animation-delay: 10s;
      	-ms-animation-delay: 10s;
      	animation-delay: 10s;
      }
      .rw-words-1 div:nth-child(4) {
        -webkit-animation-delay: 15s;
      	-ms-animation-delay: 15s;
      	animation-delay: 15s;
        color: #69c5ff;
      }
      .rw-words-1 div:nth-child(5) {
        -webkit-animation-delay: 20s;
      	-ms-animation-delay: 20s;
      	animation-delay: 20s;
      }
      .rw-words-1 div:nth-child(6) {
        -webkit-animation-delay: 25s;
      	-ms-animation-delay: 25s;
      	animation-delay: 25s;
        color: #ffc76c;
      }

      .rw-words-1 div:nth-child(7) {
        -webkit-animation-delay: 30s;
        -ms-animation-delay: 30s;
        animation-delay: 30s;
      }

      @-webkit-keyframes rotateWord {
          0% { opacity: 0; }
          2% { opacity: 0; -webkit-transform: translateY(-30px); }
      	  5% { opacity: 1; -webkit-transform: translateY(0px);}
          17% { opacity: 1; -webkit-transform: translateY(0px); }
      	  20% { opacity: 0; -webkit-transform: translateY(30px); }
      	  80% { opacity: 0; }
          100% { opacity: 0; }
      }
      @-ms-keyframes rotateWord {
          0% { opacity: 0; }
          2% { opacity: 0; -ms-transform: translateY(-30px); }
          5% { opacity: 1; -ms-transform: translateY(0px);}
          17% { opacity: 1; -ms-transform: translateY(0px); }
          20% { opacity: 0; -ms-transform: translateY(30px); }
          80% { opacity: 0; }
          100% { opacity: 0; }
      }
      @keyframes rotateWord {
          0% { opacity: 0; }
          2% { opacity: 0; -webkit-transform: translateY(-30px); transform: translateY(-30px); }
          5% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px);}
          17% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px); }
          20% { opacity: 0; -webkit-transform: translateY(30px); transform: translateY(30px); }
          80% { opacity: 0; }
          100% { opacity: 0; }
      }
    }

    @media screen and (min-width: 0px) and (max-width: 960px) {
      .rw-wrapper {
        > div {
          height: 90px;
        }
        .rw-words{
          div {
            left: 40%;
          }
        }
      }
    }
    @media screen and (min-width: 0px) and (max-width: 400px) {
      .rw-wrapper {
        .rw-words{
          div {
            left: 28%;
          }
        }
      }
    }

  }
</style>
