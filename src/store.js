import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    searchResults: [],
    libariesPages: [],
  },
  // actionstan commit edilen verileri state e aktaran kısım
  mutations: {
    searchCDN(state, fields) {
      state.libariesPages = [];
      state.searchResults = fields;
    },
    libariesPages(state, detail) {
      state.searchResults = [];
      state.libariesPages = detail;
    },
  },
  //asenkron işlemler
  actions: {
    searchCDN(context, query) {
      axios
        .get(`https://api.cdnjs.com/libraries?search=${query}`)
        .then((response) => {
          context.commit("searchCDN", response.data);
        });
    },
    libariesPages(context, name) {
      axios.get(`https://api.cdnjs.com/libraries/${name}`).then((response) => {
        context.commit("libariesPages", response.data);
      });
    },
  },
  // verileri state i return ettirerek componenetlerde kullanmamıza yardımcı olan kısım
  getters: {
    getSearchResults(state) {
      return state.searchResults;
    },
    getLibariesDetail(state) {
      return state.libariesPages;
    },
  },
});
export default store;
