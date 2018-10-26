<template>
  <v-card raised :style="{ 'min-height': imageHeight + 'px' }">
    <v-card-title primary-title>
      <div class="bar">
        <h3>{{portfolio.fields.title | cap}}</h3>
        <i class="bar-icon"></i>
        <a :href="portfolio.fields.url" target="_blanknv"><v-icon class="pink--text">launch</v-icon> </a>
      </div>
      <div class="img">
        <img
          ref="img"
          style="width:500px;"
          :src="portfolio.fields.heroImage.fields.file.url + '?fit=scale&w=500'"
        />
      </div>
      <div class="card-content">
        <p>
          <v-icon class="grey--text">work</v-icon> {{portfolio.fields.company}}  <v-icon class="grey--text">date_range</v-icon>{{ portfolio.fields.date | getFullYear}}
          <a :href="portfolio.fields.url" target="_blanknv"><v-icon class="pink--text">launch</v-icon> </a>
        </p>
        <div><VMarkdown :source="portfolio.fields.description"></VMarkdown></div>
      </div>

      <v-card-actions>
        <v-btn
          v-for="tag in portfolio.fields.tags"
          :key="tag"
          flat color="orange"
          class="tag"
        >
          {{ tag }}
        </v-btn>
      </v-card-actions>
    </v-card-title>

  </v-card>
</template>

<script>
  import VMarkdown from 'vue-markdown'
  export default {
    props: ['portfolio'],
    data() {
      return {
        imageHeight: 0
      }
    },
    created: function () {
    },
    mounted() {
      this.imageHeight = this.$refs.img.clientHeight;
    },
    filters: {
      getFullYear: (date) => {
        return (new Date(date)).getFullYear()
      },
      toDate: (date) => {
        return (new Date(date)).toDateString()
      },
      company: (name) => {
        if (!name) return ''
        return " in " +name
      },
      cap: (str) => {
        return str.replace(/\w\S*/g, function(tStr)	{
      		return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase()
      	})
      }
    },
    components: {
      VMarkdown
    }
  }
</script>

<style lang="scss" scoped>
  .thumbnail {
    margin-bottom: 1em;
  }
  .title {
    text-decoration: none;
    font-size: 22px;
    color: #373F49;
  }
  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }
  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }
  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }
  .headline{
    font-weight: 600!important;
    font-size: 24px;
  }
  .intro{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,.54)!important
  }
  .v-card{
    width: 100%;
    a {
      text-decoration: none;
    }
    .bar a {
      opacity: 0;
      display: none;
      top: 0;
      right: 0;
      position: absolute;

    }
    .v-card__title {
      padding: 0;
      font-size: 15px;
    }
    .img {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }

    .card-content{
      width: 100%;
      margin-top: 250px;
      padding: 60px 30px 20px;
    }

    .card-content,
    .card__actions{
      opacity: 0;
      width: 100%;
      display: none;
      background-color: rgba(238, 250, 255, .95);
      -webkit-transition: .45s ease-in-out;
      transition: .45s ease-in-out;

      z-index: 1000;

      font-size: 18px;
      font-weight: 400;
      line-height: 1.58;
      letter-spacing: -.004em;

      h2{
        font-size: 22px !important;
      }
    }
    &:hover {
      .card-content,
      .card__actions,
      .bar a {
        opacity: 1;
        display: block;
      }
      .img {
        -webkit-transform: scale(1.15);
        transform: scale(1.15);
        -webkit-filter: grayscale(40%); /* Safari 6.0 - 9.0 */
        filter: grayscale(40%);
        position: fixed;
        top: 24px;
        opacity: 0.9;
        filter: alpha(opacity=90); /* For IE8 and earlier */
      }
      .bar {
        background-color: #d2d4d4;
        h3 {
          -webkit-transition: .45s ease-in-out;
          transition: .45s ease-in-out;
          font-size: 25px;
          padding-top: 280px;
          color: #5ba8c5;
        }
      }
    }
    .bar {
      display: block;
      position: relative;
      height: 24px;
      background-color: #ddd;
      width: 100%;
      color: #6a6a6a;
      z-index: 2000;

      %ibar{
        height: 12px;
        width: 12px;
        display: inline-block;
        background-color: #ff5f57;
        border-radius: 50%;
        position: absolute;
        top: 6px;
        left: 10px;
      }

      i.bar-icon {
        @extend %ibar;

        &:before {
          @extend %ibar;
          content: " ";
          left: 16px;
          background-color: #ffbd2e;
          top: 0;
        }
        &:after{
          @extend %ibar;
          content: " ";
          left: 32px;
          background-color: #28ca41;
          top: 0;
        }
      }
    }

    .tag {
      color: #A0A0A0;
      text-decoration: none;
      display: inline-block;
      line-height: 1;
      border-radius: 2px;
      border: 1px solid #A0A0A0;
      margin-right: .5em;
      margin-bottom: 10px;
      .btn__content {
        background: rgba(42, 48, 49, 0.67);
      }
    }
    .tag:active,
    .tag:hover,
    .tag:focus {
      color: #606060;
      border-color: #606060;
    }
  }
</style>

<style lang="scss">
.card-content{
  img {
    width: 65% !important;
  }
}
</style>
