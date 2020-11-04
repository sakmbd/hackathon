import axios from "axios";
import store from "../store";

var token = localStorage.getItem("token");
(async () => {
  // get token from central store
  token = await store.getters.getToken;
})();

const instance = axios.create({
  headers: {
    Authorization: "Bearer " + token
  }
});

export default instance;
