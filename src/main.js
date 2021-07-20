import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { router } from "./router";
import VueClipboard from "vue-clipboard2";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

Vue.use(VueClipboard);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
