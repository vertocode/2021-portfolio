<template>
  <div class="portfolio">
    <v-container>
      <time-line-main />
    </v-container>
  </div>
</template>

<script>
import TimeLineMain from '../components/timeline/TimeLineMain.vue';

export default {
  components: {
    TimeLineMain,
  },
};
</script>

<style lang="scss" scoped>
.portfolio {}
</style>
