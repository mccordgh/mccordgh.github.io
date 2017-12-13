import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
  count: 0,
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 2000);
    });
  },
};

const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? 'even' : 'odd';
  },
};

const mutations = {
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    state.count -= 1;
  },
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
