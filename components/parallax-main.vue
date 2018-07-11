<template>
  <v-parallax src="/img/hero1.jpg" height="520" >
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <h1 class="main-title text-xs-center">{{mainTitle}}</h1>
      <div class="rw-wrapper sub-title mb-3 text-xs-center">
        <div>I am ${</div>
        <div class="rw-words rw-words-1">
          <div v-for="(header,index) in subHeader" :key="index"> {{header}} </div>
        </div>
        <div>}</div>
      </div>
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
        mainTitle: 'Hello world',
        subTitle: 'Kelvin Ho,👨‍💻 software engineer,🌐 web and app developer,📦 technology fans,💻 computer geek,🔠 codealholic,👨‍👩‍👦‍👦 father ',
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

    .rw-wrapper {
      width: 90%;
    	position: relative;
      margin: 30px auto 0 auto;
      padding-top: 10px;
    	text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
      display: flex;
      > div {
      	font-size: 38px;
      	font-weight: normal;
        flex: 2;
      }
      > div:nth-child(1) {
        width: 200px;
        flex: 1;
      }
      > div:last-child {
        width: 50px;
        flex: 2;
      }

      .rw-words{
        display: table-cell;
      	text-indent: 10px;

        div{
        	opacity: 0;
        	white-space: nowrap;
          flex: 1;
        }
      }

      .rw-words-1 div{
        display: flex;
        position: absolute;
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
  }
</style>
