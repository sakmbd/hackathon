<template>
  <loading
    :active.sync="getLoader.isLoading"
    :can-cancel="false"
    :on-cancel="onCancel"
    :is-full-page="getLoader.fullPage"
    :loader="getLoader.type"
    :height="getLoader.height"
    :width="getLoader.width"
    :color="getLoader.color"
  ></loading>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  computed: {
    ...mapGetters(["getLoader"])
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      loaderHight: 150,
      loaderWidth: 150,
      loaderColor: "#007aff",
      loaderType: "spinner"
    };
  },
  components: {
    Loading
  },
  methods: {
    onCancel() {
      console.log("User cancelled the loader.");
    }
  }
};
</script>
