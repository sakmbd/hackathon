import Vue from "vue";
import Vuex from "vuex";

import loader from "./modules/loader";
import order from "./modules/order";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
    order
  }
});
