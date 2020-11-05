const state = {
  orderData: null
};

// Loader getters to get the state
const getters = {
  getOrderData(state) {
    return state.orderData;
  }
};

// Loader mutations to change the state
const mutations = {
  mutateOrderData(state, payLoad) {
    state.orderData = payLoad;
    console.log("getters data => ", state.orderData);
  },
  mutateResetOrderData(state) {
    state.orderData = null;
  }
};

// Loader action to commit the mutations
const actions = {
  setOrderData({ commit }, data) {
    console.log("seted data => ", data);
    commit("mutateOrderData", data);
  },
  resetOrderData({ commit }) {
    commit("mutateResetOrderData");
  }
};

// Export as default
export default {
  state,
  mutations,
  actions,
  getters
};
