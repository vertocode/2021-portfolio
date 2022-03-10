import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { VUETIFY_COLOR } from '@/data/colors/customColors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      ...VUETIFY_COLOR,
    },
  },
});
