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
          <v-col :cols="colsSkillsAndImage">
            <v-img
              class="ma-auto"
              id="home-profile"
              max-height="350"
              max-width="350"
              :src="HOME_DATA.IMAGE_PROFILE"
            />
            <div class="ma-auto skills">
              <h2 class="text-center mt-10">{{ SERVICES.SECOND_TITLE }}:</h2>
              <v-row class="d-flex ma-3">
                <v-col v-for="item in SERVICES.SECOND_CARD_DATA" :key="item.TITLE">
                  <v-img
                    max-height="50"
                    max-width="50"
                    class="mt-11 ma-auto"
                    :src="item.IMG"
                  />
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="8">
            <p
              class="text-left mt-5 mx-2 paragraph-indent px-2"
              v-for="(paragraph, index) in HOME_DATA.FIRST_DESCRIPTION"
              :key="index"
            >
              {{ paragraph }}
            </p>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-img
                  src="https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif"
                  class="ma-2"
                  alt="programmer-gif"
                  max-height="150"
                  max-width="200"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    <!--      <v-card-->
    <!--        :class="isCardDark"-->
    <!--        elevation="0"-->
    <!--        class="my-5 mt-8 text-center card-main__rounded"-->
    <!--        outlined-->
    <!--        v-if="SERVICES.SECOND_CARD_VISIBLE"-->
    <!--      >-->
    <!--      </v-card>-->
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
    colsSkillsAndImage() {
      return this.$vuetify.breakpoint.smAndDown ? 12 : 4;
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
    text-indent: 5px;
  }
}
</style>
