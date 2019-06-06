import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SchoolCascade: []
  },
  mutations: {
    SchoolCascade(state,value) {
      state.SchoolCascade = value;
    }
  },
  getters: {
    SchoolCascade: state => state.SchoolCascade
  }
});
