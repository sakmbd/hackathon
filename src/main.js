import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Snotify from "vue-snotify";
import "vue-snotify/styles/material.css";

import AsyncComputed from "vue-async-computed";

// importing the helper
import interceptorsSetup from "./helpers/interceptors";
interceptorsSetup();

Vue.use(VueSweetalert2);

Vue.use(Snotify);

Vue.use(AsyncComputed);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
