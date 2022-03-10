<template>
  <v-app app>
    <app-nav-bar/>
    <v-main>
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
  beforeMount() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
