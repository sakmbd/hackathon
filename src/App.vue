<template>
  <v-app>
    <component v-bind:is="layout"></component>
    <vue-snotify></vue-snotify>
    <sa-loder></sa-loder>
  </v-app>
</template>

<script>
import AppLayout from "./components/layouts/Default";
import SimpleLayout from "./components/layouts/Simple";
import SaLoder from "./components/loaders/Loader.vue";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "app";
    }
  },
  components: {
    app: AppLayout,
    simple: SimpleLayout,
    SaLoder
  }
};
</script>
