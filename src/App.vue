<template>
  <v-app app>
    <app-nav-bar/>
    <v-main :class="isBackgroundDark">
      <router-view />
    </v-main>
    <footer-main />
  </v-app>
</template>

<script>
import AppNavBar from '@/components/navigation/AppNavBar.vue';
import FooterMain from '@/components/footer/FooterMain.vue';

export default {
  name: 'App',
  components: {
    AppNavBar,
    FooterMain,
  },
  computed: {
    isBackgroundDark() {
      return this.$vuetify.theme.dark ? 'dark-theme' : 'light-theme';
    },
  },
  beforeMount() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
.light-theme {
  background-size: auto;
  background: url("./assets/img/themes/light-theme.jpg") repeat-y center;
}
.dark-theme {
  background-size: auto;
  background: url("./assets/img/themes/dark-theme.jpg") repeat-y center;
}
</style>
