import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const vueTypePlugin = require('vue-typer').default;

Vue.use(vueTypePlugin);

Vue.config.productionTip = false;
const vue = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
});

vue.$mount('#app');
