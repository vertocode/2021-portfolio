<template>
  <div class="app-nav-bar">
    <v-app-bar height="64" hide-on-scroll flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn text height="64" @click.prevent="handleHome">
        <h2>{{ TOP_MENU_DATA.HOME }}</h2>
      </v-btn>
      <v-spacer/>
      <v-btn
        text height="64"
        @click.prevent="handleAbout"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        {{ TOP_MENU_DATA.ABOUT }}
      </v-btn>
      <v-btn
        height="64"
        text
        @click.prevent="handlePortfolio"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        {{ TOP_MENU_DATA.PORTFOLIO }}
      </v-btn>
      <v-btn
        height="64"
        text
        @click.prevent="handleBook"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        {{ TOP_MENU_DATA.BOOKS }}
      </v-btn>
      <v-btn
        height="64"
        text
        @click.prevent="handleContact"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        {{ TOP_MENU_DATA.CONTACT }}
      </v-btn>
      <v-switch
        v-model="$vuetify.theme.dark"
        :prepend-icon="themeIcon"
        hide-details
        inset
      />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <drawer-menu-items :small-screen="$vuetify.breakpoint.smAndDown" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerMenuItems from '@/components/navigation/DrawerMenuItems.vue';
import { TOP_MENU_DATA } from '@/data/menu/navbar';

export default {
  name: 'AppNavBar',
  components: {
    DrawerMenuItems,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  created() {
    this.TOP_MENU_DATA = TOP_MENU_DATA;
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    themeIcon() {
      return this.$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-brightness-6';
    },
  },
  methods: {
    handleAbout() {
      const path = '/about';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    handleHome() {
      const path = '/';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    handlePortfolio() {
      const path = '/portfolio';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    handleBook() {
      const path = '/recommended-books';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    handleContact() {
      const path = '/contact';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-nav-bar {}
</style>
