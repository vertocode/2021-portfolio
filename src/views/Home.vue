<template>
  <div class="home">
    <v-container>
      <v-card
        :class="isCardDark"
        elevation="0"
        class="my-1 text-center card-main__rounded"
        outlined
      >
        <h1 class="text-center mt-4">{{ HOME_DATA.FULL_NAME }}</h1>
        <v-row no-gutters class="my-8 d-flex justify-center">
          <v-col cols="auto" md="auto">
            <v-img
              id="home-profile"
              max-height="350"
              max-width="350"
              :src="HOME_DATA.IMAGE_PROFILE"
            />
          </v-col>
          <v-col cols="auto" md="9">
            <h2 class="mt-4 occupation">
              <strong>Front-end Developer & Quality Assurance Engineer</strong></h2>
            <p
              class="text-left mt-5 mx-2 paragraph-indent px-5"
              v-for="(paragraph, index) in HOME_DATA.FIRST_DESCRIPTION"
              :key="index"
            >
              {{ paragraph }}
            </p>
            <v-img
             src="https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif"
             class="ma-auto"
             alt="programmer-gif"
               max-height="150"
               max-width="200"
            />
          </v-col>
        </v-row>
      </v-card>
      <v-card
        :class="isCardDark"
        elevation="0"
        class="my-5 mt-8 text-center card-main__rounded"
        outlined
        v-if="SERVICES.SECOND_CARD_VISIBLE"
      >
        <h2 class="text-center mt-4">{{ SERVICES.SECOND_TITLE }}</h2>
        <v-row
          no-gutters
          class="my-8 d-flex justify-center"
          v-for="item in SERVICES.SECOND_CARD_DATA"
          :key="item.TITLE"
        >
          <v-col cols="auto" md="2" align="center">
            <v-img
              max-height="100"
              max-width="100"
              class="mt-11"
              :src="item.IMG"
            />
          </v-col>
          <v-col cols="auto" md="9">
            <div class="text-left mt-3 mx-5">
              <h3 :class="titleCardCentered">{{ item.TITLE }}</h3>
              <p class="paragraph-indent">
                {{ item.DESCRIPTION }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <!--
      it is not necessary to remove
      this component "in-progress",
      if you are at work just pass
      :progress="true",
      progress default is false.
    -->
    <in-progress :progress="false"/>
  </div>
</template>

<script>
import inProgress from '@/components/inProgress.vue';
import { HOME_DATA, SERVICES } from '@/data/home/home';

export default {
  name: 'Home',

  components: {
    inProgress,
  },
  computed: {
    isCardDark() {
      return this.$vuetify.theme.dark ? 'card-main__dark' : 'card-main__light';
    },
    titleCardCentered() {
      return this.$vuetify.breakpoint.smAndDown ? 'mb-3 text-center' : 'mb-3';
    },
  },
  created() {
    this.HOME_DATA = HOME_DATA;
    this.SERVICES = SERVICES;
  },
};
</script>

<style lang="scss" scoped>
.home {
  .text-link__card {
    font-size: 16px;
  }
  #home-profile {
    border-radius: 10%;
  }
  .card-main {
    &__dark:hover {
      background-color: $color-dark-hover-transparent !important;
    }
    &__dark {
      background-color: $color-dark-transparent !important;
    }
    &__light:hover {
      background-color: $color-light-hover-transparent !important;
    }
    &__light {
      background-color: $color-light-transparent !important;
    }
  }
  .card-main__rounded {
    border-radius: $border-radius;
  }

  .paragraph-indent {
    text-indent: 50px;
  }
}
</style>
