<template>
  <div>
    <v-card>
      <v-card-title>
        <template>
          <v-container>
            <v-row>
              All About Customer
            </v-row>
          </v-container>
        </template>
      </v-card-title>
      <template>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="ban"
              :rules="banRules"
              label="BAN"
              required
            ></v-text-field>

            <v-text-field
              v-model="product_id"
              label="Product Id"
              required
            ></v-text-field>

            <v-text-field
              v-model="order_id"
              label="Order Id"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submit"
            >
              Submit
            </v-btn>

            <v-btn color="warning" @click="reset">
              Reset
            </v-btn>
          </v-form>
        </v-container>
      </template>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    ban: "",
    banRules: [
      v => !!v || "This is required",
      v => !/\D/.test(v) || "BAN must be a number"
    ],
    product_id: "",
    order_id: "",
    responseData: null
  }),
  methods: {
    ...mapActions(["showLoader", "hideLoader", "setOrderData"]),
    submit() {
      if (this.$refs.form.validate()) {
        this.showLoader({
          isLoading: true,
          loaderType: "spinner"
        });
        let data = {};
        data.ban = this.ban;
        if (this.product_id) {
          data.product_id = this.product_id;
        }
        if (this.order_id) {
          data.order_id = this.order_id;
        }
        axios
          .post(process.env.VUE_APP_API + "/customer", data)
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
              this.setOrderData(r.data.data.orders);
              this.$router.push("/search");
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
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
