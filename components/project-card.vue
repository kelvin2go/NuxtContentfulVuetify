<template>
  <v-card raised :style="{ 'min-height': imageHeight + 'px' }">
    <v-card-title primary-title>
      <div class="bar">
        <h3>{{portfolio.fields.title | cap}}</h3>
        <i class="bar-icon"></i>
        <a :href="portfolio.fields.url" target="_blank"><v-icon class="pink--text">launch</v-icon> </a>
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
          <a :href="portfolio.fields.url" target="_blank"><v-icon class="pink--text">launch</v-icon> </a>
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
  .card{
    width: 100%;
    a {
      text-decoration: none;
    }

    .card__title {
      padding: 0;
      font-size: 15px;
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
