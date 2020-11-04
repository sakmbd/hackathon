// Import ES6 Promise
import "es6-promise/auto";

import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

import PageNotFound from "../views/errors/PageNotFound.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// Application all routes
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "*",
    component: PageNotFound,
    meta: { layout: "simple" }
  }
];

// Router instance
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
