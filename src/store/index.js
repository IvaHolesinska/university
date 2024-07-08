import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    domainDetailData: {},
  },
  mutations: {
    setDomainDetailData(state, data) {
      state.domainDetailData = data;
    },
  },
  actions: {
    async loadDomainDetailData({ commit }) {
      try {
        const response = await axios.get("/domain-detail.json");
        commit("setDomainDetailData", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  getters: {
    getDomainDetailData: (state) => state.domainDetailData,
  },
});
