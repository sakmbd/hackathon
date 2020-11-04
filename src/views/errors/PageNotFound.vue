<template>
  <v-container fill-height style="height: calc(100vh - 58px);">
    <v-layout align-center>
      <v-flex text-center>
        <h1 class="display-2 primary--text">Whoops, 404</h1>
        <p>The page you were looking for does not exist</p>
        <v-btn :to="'/'" outlined color="primary">
          <v-icon left v-text="'mdi-arrow-left'" />
          Go Home
        </v-btn>
      </v-flex>
    </v-layout>
    <Loader :isLoader="showLoader" :isFullPage="false" :type="'bars'"></Loader>
  </v-container>
</template>

<script>
import Loader from "@/components/loaders/Loader.vue";
export default {
  data() {
    return {
      showLoader: false
    };
  },
  components: {
    Loader
  }
};
</script>
