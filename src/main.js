import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/scss/index.scss";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  computed: {
    currentComponent() {
      return "";
    },
  },
  render: (h) => h(App),
}).$mount("#app");
