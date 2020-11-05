<template>
  <v-card>
    <v-card-title>
      <template>
        <v-container>
          <v-row>
            All About Customer
            <v-spacer></v-spacer>
            <v-btn depressed :to="'/'" class="text-capitalize">
              Back
            </v-btn>
          </v-row>
        </v-container>
      </template>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="orders"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "BAN", value: "BAN" },
        { text: "Product Id", value: "PRODUCT_ID" },
        { text: "Order Id", value: "OM_ORDER_ID" },
        { text: "Pending Work", value: "PENDING_WORK" },
        { text: "Due Date", value: "DUE_DATE" }
      ],
      orders: []
    };
  },
  created() {
    this.showLoader({
      isLoading: true,
      loaderType: "bars"
    });
    axios.get(process.env.VUE_APP_API + "/customer").then(result => {
      console.log(result);
      this.orders = result.data.data.orders;
      this.hideLoader();
    });
  },
  methods: {
    ...mapActions(["showLoader", "hideLoader"])
  }
};
</script>
