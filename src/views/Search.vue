<template>
  <div>
    <v-card>
      <v-card-title>
        <template>
          <v-container>
            <v-row>
              Search Result
              <v-spacer></v-spacer>
              <v-btn depressed :to="'/'" class="text-capitalize">
                Back
              </v-btn>
            </v-row>
          </v-container>
        </template>
      </v-card-title>
    </v-card>

    <v-card
      v-for="order in getOrderData"
      :key="order.OM_ORDER_ID"
      class="searchCard"
    >
      <template>
        <v-container>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>BAN</td>
                  <td>{{ order.BAN }}</td>
                </tr>
                <tr>
                  <td>ORDER ID</td>
                  <td>{{ order.OM_ORDER_ID }}</td>
                </tr>
                <tr>
                  <td>PRODUCT ID</td>
                  <td>{{ order.PRODUCT_ID }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div v-if="order.ERROR_DETAIL" class="searchCard">
            <v-alert dense outlined type="error">
              {{ order.ERROR_DETAIL }}
            </v-alert>
          </div>
          <div v-else class="searchCard">
            <v-alert dense outlined type="success">
              Everything looks like good.
            </v-alert>
          </div>
          <v-row v-if="order.PENDING_WORK == 'Y'">
            <v-col cols="2">
              <v-btn
                depressed
                color="success"
                @click="submit('resolve', order)"
              >
                Resolve
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                depressed
                color="primary"
                @click="submit('incident', order)"
              >
                Create Incident
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["getOrderData"])
  },
  mounted() {
    if (!this.getOrderData) {
      this.$router.push("/");
    }
  },
  methods: {
    ...mapActions(["showLoader", "hideLoader"]),
    submit(type, data) {
      this.showLoader({
        isLoading: true,
        loaderType: "spinner"
      });
      axios
        .post(process.env.VUE_APP_API + "/customer", {
          ban: data.BAN,
          product_id: data.PRODUCT_ID,
          order_id: data.OM_ORDER_ID,
          identifier: type
        })
        .then(r => {
          if (r.data.status_code == 404) {
            this.$snotify.error(r.data.data, {
              timeout: 2000,
              showProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              position: "rightTop"
            });
          } else {
            let msg = type == "resolve" ? "Resolved" : "Incident created";
            this.$snotify.success(`${msg} sucessfully!`, {
              timeout: 2000,
              showProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              position: "rightTop"
            });
          }
          console.log(r.data.data);
          this.hideLoader();
        })
        .catch(error => {
          console.log("Error - ", error);
          this.hideLoader();
          this.$snotify.error(error, {
            timeout: 2000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            position: "rightTop"
          });
        });
    }
  }
};
</script>
