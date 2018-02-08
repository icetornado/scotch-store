// ./src/store/index
import Vue from 'vue';
import Vuex from 'vuex';
import { productGetters, manufacturerGetters, counterGetter } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
    manufacturer: {},
    counter: 0,
  },
  /* getters: {
    counter: state => state.counter,
    productGetters,
    manufacturerGetters,
  }, */
  /* mutations: {
    counterInc(state, n) {
      state.counter += n;
    },
  }, */
  getters: Object.assign({}, productGetters, manufacturerGetters, counterGetter),
  actions: Object.assign({}, productActions, manufacturerActions),
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
});
