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
  background: radial-gradient(circle, rgba(2,0,36,1) 0%,
  rgba(209,209,209,1) 0%, rgba(255,255,255,1) 100%);
}
.dark-theme {
  background-size: auto;
  background: radial-gradient(circle, rgba(2,0,36,1) 0%,
  rgba(92,90,90,1) 0%, rgba(0,0,0,1) 100%);
}
</style>
