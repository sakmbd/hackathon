<template>
  <v-list dense>
    <template v-for="item in items">
      <router-link tag="div" :to="item.to" :key="item.text">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </template>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: {}
  }),
  mounted() {
    let itemArray = [
      // {
      //   icon: "mdi-contacts",
      //   text: "Clients",
      //   to: "/clients",
      //   isShow: 1 //userData.is_super
      // },
      {
        icon: "mdi-account-multiple",
        text: "List",
        to: "/list",
        isShow: 1
      }
    ];
    this.items = itemArray.filter(el => el.isShow == "1");
  }
};
</script>

<style>
.router-link-active {
  background-color: #e5e5e5 !important;
}
</style>
