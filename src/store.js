import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // data
  state: {
    user: {
      name: "",
      email: "",
      password: ""
    }
  },

  // take the state, perform some function, output the value
  getters: {
    getName: state => {
      return state.user.name;
    },
    getEmail: state => {
      return state.user.email;
    }
  },

  // mutations update the data
  mutations: {
    USER(state, data) {
      state.user = data;
    }
  },

  // actions commit a mutation(黄字是mutation), action is dispatched from component
  actions: {
    updateUser({ commit }, { name, email, password }) {
      commit("USER", { name, email, password });
    }
  }
});
