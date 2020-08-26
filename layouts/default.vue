<template>
  <v-app id="app">
    <v-toolbar
      dark
      fixed
      app
      :clipped-left="clipped"
      v-on:scroll="handleScroll"
      v-bind:class="{solid: this.scroll > 48}"
    >
      <a id="brand" href="/">
        <v-toolbar-title class="titleText" v-text="title"></v-toolbar-title>
      </a>
      <v-spacer></v-spacer>
      <template v-for="(item, i) in items">
        <v-list-tile
          v-if="item.to"
          router
          :to="item.to"
          :key="i"
          exact
          class="menuText white--text"
        >
          <v-list-tile-content>
            <v-list-tile-title class="white--text" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <a
          v-if="item.extto"
          :key="item.title"
          :href="item.extto"
          class="white--text v-list__tile--active v-list__tile v-list__tile--link theme--dark"
        >
          <div class="v-list__tile__content">
            <div class="v-list__tile__title">{{item.title}}</div>
          </div>
        </a>
      </template>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="main">
      <section v-if="$route.path == '/'">
        <Parallax class="mainpage" />
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
        <v-subheader>KELVIN HO</v-subheader>
        <template v-for="(item, i) in items">
          <v-list-tile v-if="item.to" router :to="item.to" :key="i" exact>
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <a
            v-if="item.extto"
            :key="item.title"
            :href="item.extto"
            class="v-list__tile v-list__tile--link theme--dark"
          >
            <div class="v-list__tile__action">
              <v-icon v-if="item.icon" v-html="item.icon"></v-icon>
            </div>
            <div class="v-list__tile__content">
              <div class="v-list__tile__title">{{item.title}}</div>
            </div>
          </a>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>Externals</v-subheader>
        <v-list-tile
          avatar
          v-for="item in itemsExt"
          :key="item.title"
          :href="item.to"
          :target="item.target"
        >
          <v-list-tile-avatar>
            <v-icon v-if="item.icon" v-html="item.icon"></v-icon>
            <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" size="2x" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader>
        <v-list-tile>
          <v-btn icon @click="miniVariant = !miniVariant">
            <v-icon>photo_size_select_small</v-icon>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer class="grey lighten-2" height="320">
      <v-layout row wrap align-center class="text-md-center">
        <v-flex xs4 offset-xs4>
          <a href="/">
            <v-toolbar-title class="titleText" text-color="white" v-text="title"></v-toolbar-title>
          </a>
        </v-flex>
        <v-flex xs6 offset-xs3>
          <v-list class="footer-list">
            <template v-for="item in items">
              <v-list-tile
                v-if="item.to"
                :key="item.title"
                router
                :to="item.to"
                class="white--text"
              >
                <v-list-tile-content>{{item.title}}</v-list-tile-content>
              </v-list-tile>
              <a
                v-if="item.extto"
                :key="item.title"
                :href="item.extto"
                class="v-list__tile v-list__tile--link theme--light"
              >
                <div class="v-list__tile__content">{{item.title}}</div>
              </a>
            </template>
          </v-list>
        </v-flex>
        <v-flex xs12 text-xs-center class="footer-btn">
          <template v-for="item in itemsExt">
            <v-btn
              v-if="item.to"
              small
              flat
              avatar
              :key="item.faIcon"
              :href="item.to"
              :target="item.target"
            >
              <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" size="2x" />
            </v-btn>
          </template>
        </v-flex>
        <v-flex xs12>
          <div class="grey--text darken-2 ml-3">
            by
            <a href="https://github.com/kelvin2go/">Kelvin Ho</a> - 2020
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Parallax from "@/components/parallax-main.vue";
import ParallaxSub from "@/components/parallax-sub.vue";

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      scroll: 0,
      items: [
        { icon: "home", title: "Home", to: "/" },
        { icon: "library_books", title: "Blogs", to: "/posts" },
        { icon: "portrait", title: "Showcases", to: "/showcases" },
        { icon: "favorite", title: "Side Projects", to: "/sideprojects" },
      ],
      itemsExt: [
        {
          faIcon: "facebook",
          title: "",
          to: "https://www.facebook.com/kelvinho84",
          target: "_blank",
        },
        {
          faIcon: "github",
          title: "",
          to: "https://github.com/kelvin2go",
          target: "_blank",
        },
        {
          faIcon: "twitter",
          title: "",
          to: "https://twitter.com/kelvin_ho84",
          target: "_blank",
        },
        {
          faIcon: "slack",
          title: "@kelvinho84",
          to: "https://codeaholics.slack.com/",
          target: "_blank",
        },
        {
          faIcon: "pinterest",
          title: "",
          to: "https://pinterest.com/kelvin2go/",
          target: "_blank",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "KELVIN HO",
    };
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY;
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    Parallax,
    ParallaxSub,
  },
};
</script>

<style lang="stylus">
#app {
  @media screen and (min-width: 0px) and (max-width: 600px) {
    .menuText {
      display: none;
    }
  }

  .v-toolbar {
    z-index: 300;
    background: rgba(18, 21, 20, 0.55);

    &.solid {
      background: rgba(18, 21, 20, 0.4);
    }

    font-family: Raleway, Helvetica, Arial, sans-serif;
  }

  .mainpage {
    padding: 0 !important;

    .v-parallax {
      position: absolute;
      top: 0;
    }

    .content {
      background: #f4f7f6;
    }
  }

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

      .list__tile__content {
        text-transform: uppercase;
      }
    }
  }

  .v-footer {
    padding-top: 30px;
    min-height: 356px;

    .footer-btn {
      .btn {
        min-width: 38px;
      }
    }

    .titleText {
      text-align: center;
      color: #707070;
      border: 1px solid #707070;
      padding: 4px;
    }

    .footer-list {
      color: #707070;
      font-size: 14px;
      padding-top: 15px;
      background: none;

      a, a:link, a:visited {
        color: #707070 !important;
        text-decoration: none;
      }

      .v-list__tile {
        .v-list__tile__content {
          text-transform: uppercase;
          flex-direction: unset;
        }
      }
    }
  }
}

body {
  font-family: 'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif';
}

.responsive {
  width: 100%;
  height: auto;
}

.v-navigation-drawer {
  z-index: 9000 !important;

  .list > div:hover {
    a, i {
      color: #ff9800 !important;
    }
  }

  .ext-icon {
    display: inline-block;

    &:hover {
      color: #ff9800;
    }
  }

  &.navigation-drawer--mini-variant {
    .ext-icon {
      padding: 0 12px;
    }
  }
}
</style>
