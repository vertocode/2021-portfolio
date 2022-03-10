<template>
  <div class="drawer-menu-items">
    <v-list nav flat>
      <v-list-item-group
        v-model="group"
      >
        <v-list-item
          :key="item.NAME"
          v-for="item in DRAWER_DATA"
          @click="handleInsideLocation(item.LOCATION)"
        >
          <v-icon>{{ item.ICON }}</v-icon>
          <v-list-item-title class="ml-3"> {{ item.NAME }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { DRAWER_DATA } from '@/data/menu/drawer';

export default {
  name: 'DrawerMenuItems',
  props: {
    smallScreen: {
      type: Boolean,
    },
  },
  data() {
    return {
      group: null,
    };
  },
  created() {
    this.DRAWER_DATA = DRAWER_DATA;
  },
  methods: {
    handleInsideLocation(location) {
      if (location.includes('http')) {
        window.open(location);
      } else if (this.$route.path !== location) {
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-menu-items {}
</style>
