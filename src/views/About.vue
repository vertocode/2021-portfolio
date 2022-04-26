<template>
  <div class="about">
      <v-container>
        <v-row class="justify-center mt-4 mb-4">
          <v-col
            class="d-flex justify-center"
            :key="item.ID"
            cols="auto"
            md="4"
            v-for="item in ABOUT_CARD_DATA"
          >
          <card-custom :card-number="item.ID"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardCustom from '@/components/card/CardCustom.vue';
import { ABOUT_CARD_DATA } from '@/data/card/cards';

export default {
  components: {
    CardCustom,
  },
  created() {
    this.ABOUT_CARD_DATA = ABOUT_CARD_DATA;
  },
};
</script>
