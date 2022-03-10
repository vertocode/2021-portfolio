<template>
  <div class="time-line-main">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="card in PORTFOLIO_CARD_DATA"
        :key="card.ID"
      >
        <span
          slot="opposite"
          v-if="card.OPPOSITE_DESCRIPTION"
        >
          {{ card.OPPOSITE_DESCRIPTION }}
        </span>
        <card-custom :card-number="card.ID" :portfolio="true"/>
      </v-timeline-item>
    </v-timeline>
  </div>

</template>

<script>
import CardCustom from '@/components/card/CardCustom.vue';
import { PORTFOLIO_CARD_DATA } from '@/data/card/cards';

export default {
  components: {
    CardCustom,
  },
  created() {
    this.PORTFOLIO_CARD_DATA = PORTFOLIO_CARD_DATA;
  },
};
</script>

<style lang="scss" scoped>
.time-line-main {}
</style>
