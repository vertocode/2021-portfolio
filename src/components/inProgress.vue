<template>
  <div class="in-progress" v-if="progress">
    <v-container class="mb-10">
      <v-card
        :class="isCardDark"
        elevation="0"
        class="text-center pa-10 mt-10 card-main__rounded"
        outlined
      >
        <v-row no-gutters class="d-flex justify-center align-center text-center">
          <v-col cols="auto">
            <h1>HELLO, WE ARE CURRENT WORKING ON
              <a href="/#/about">ABOUT SECTION</a>
            </h1>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-img :lazy-src="WorkProgressImg" :src="WorkProgressImg" max-width="200px"></v-img>
          </v-col>
          <v-col cols="12" md="8" class="mt-3">
            <v-progress-linear
              color="amber"
              height="25"
              indeterminate
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import WorkProgress from '@/assets/img/work_in_progress.png';

export default {
  name: 'inProgress',
  components: {
  },
  data() {
    return {
      power: 30,
    };
  },
  props: {
    progress: {
      type: Boolean,
    },
  },
  computed: {
    isCardDark() {
      return this.$vuetify.theme.dark ? 'card-main__dark' : 'card-main__light';
    },
    WorkProgressImg() {
      return WorkProgress;
    },
  },
};
</script>

<style lang="scss" scoped>
.in-progress {
  background-position: center center;
  background-size: cover;
  height: 100%;

  .card-main {
    &__dark {
      background-color: $color-dark-transparent !important;
    }&__light {
      background-color: $color-light-transparent !important;
    }
  }
  .card-main__rounded {
    border-radius: $border-radius;
  }
}
</style>
