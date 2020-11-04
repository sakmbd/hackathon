import axios from "axios";
import router from "../../router/index";

// Loader related central state
const state = {
  isLoading: false,
  fullPage: true,
  loaderHight: 100,
  loaderWidth: 100,
  loaderColor: "#007aff",
  loaderType: "spinner"
};

// Loader getters to get the state
const getters = {
  getLoader(state) {
    return {
      isLoading: state.isLoading,
      fullPage: state.fullPage,
      height: state.loaderHight,
      width: state.loaderWidth,
      color: state.loaderColor,
      type: state.loaderType
    };
  }
};

// Loader mutations to change the state
const mutations = {
  showLoader(state, payLoad) {
    state.isLoading = payLoad.isLoading;
    if (payLoad.loaderType && payLoad.loaderType != "") {
      state.loaderType = payLoad.loaderType;
    }
    if (payLoad.fullPage && payLoad.fullPage != "") {
      state.fullPage = payLoad.fullPage;
    }
    if (payLoad.loaderColor && payLoad.loaderColor != "") {
      state.loaderColor = payLoad.loaderColor;
    }
    if (payLoad.loaderColor && payLoad.loaderColor != "") {
      state.loaderColor = payLoad.loaderColor;
    }
    if (payLoad.loaderWidth && payLoad.loaderWidth != "") {
      state.loaderWidth = payLoad.loaderWidth;
    }
  },
  hideLoader(state) {
    state.isLoading = false;
  }
};

// Loader action to commit the mutations
const actions = {
  showLoader({ commit }, options) {
    commit("showLoader", options);
  },
  hideLoader({ commit }) {
    commit("hideLoader");
  }
};

// Export as default
export default {
  state,
  mutations,
  actions,
  getters
};
