// Import ES6 Promise
import "es6-promise/auto";

import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

import PageNotFound from "../views/errors/PageNotFound.vue";
import Home from "../views/Home.vue";
import CustomerList from "../views/Lists.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

// Application all routes
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/list",
    name: "list",
    component: CustomerList
  },
  {
    path: "/search",
    name: "search",
    component: Search
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
