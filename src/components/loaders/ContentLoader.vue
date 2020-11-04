<template>
  <component :is="type"></component>
</template>

<script>
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader
} from "vue-content-loader";

export default {
  props: {
    type: {
      default: "CodeLoader"
    }
  },
  components: {
    ContentLoader,
    FacebookLoader,
    CodeLoader,
    BulletListLoader,
    InstagramLoader,
    ListLoader
  }
};
</script>
