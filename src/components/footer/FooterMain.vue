<template>
  <div class="footer-main">
    <v-footer class="main-footer pa-10" padless>
      <v-container class="d-flex">
        <v-row no-gutters class="justify-space-around">
          <v-col class="text-center mt-4 my-auto px-4" cols="12" md="7">
            <h2 class="grey--text">{{ ABOUT_USER_DATA.ABOUT }}</h2>
            <p class="grey--text text--darken-2">{{ ABOUT_USER_DATA.DESCRIPTION }}</p>
          </v-col>
          <v-col cols="auto" class="text-center my-auto px-4">
            <h3 class="grey--text mb-2">{{ LINKS_USER_DATA.LINKS_TITLE }}</h3>
            <v-spacer/>
            <div class="mb-2" :key="item.TITLE" v-for="item in LINKS_USER_DATA.LINKS_VALUES">
              <a :href="item.VALUE" target="_blank">
                <v-icon :size="item.ICON_SIZE">{{ item.ICON }}</v-icon>
                {{ item.TITLE }}
              </a>
            </div>
            <h3 class="grey--text">{{ LINKS_USER_DATA.FULL_NAME }}</h3>
            <a
              class="grey--text text--darken-2 ma-0"
              :key="item.EMAIL" v-for="item in LINKS_USER_DATA.EMAILS"
              :href="mailTo(item.EMAIL)"
            >
              {{ item.EMAIL }}
            </a>
          </v-col>
          <v-col cols="auto" class="text-center my-auto px-4">
            <h3 class="grey--text mt-3">{{ LINKS_USER_DATA.ADDRESS_TITLE }}</h3>
            <p class="grey--text text--darken-2">{{ LINKS_USER_DATA.ADDRESS_LOCATION }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { ABOUT_USER_DATA, LINKS_USER_DATA } from '@/data/footer/profile';
import mailTo from '@/helpers/general/links';

export default {
  created() {
    this.ABOUT_USER_DATA = ABOUT_USER_DATA;
    this.LINKS_USER_DATA = LINKS_USER_DATA;
  },
  methods: {
    mailTo,
  },
};
</script>

<style lang="scss" scoped>
.footer-main {
  .main-footer {
    font-family: "Roboto", sans-serif;
  }

  .main-footer h2 {
    font-weight: normal;
    font-size: 2.5em;
  }
}
</style>
