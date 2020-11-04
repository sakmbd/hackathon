import axios from "axios";
import store from "../store";

export default function setup() {
  axios.interceptors.request.use(
    async function(config) {
      const token = await store.getters.getToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
}
