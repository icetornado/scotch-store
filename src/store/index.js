// ./src/store/index
import Vue from 'vue';
import Vuex from 'vuex';
import { productGetters, manufacturerGetters, counterGetter, isLoggedInGetter } from './getters';
import { productMutations, cartMutations, manufacturerMutations, loggingInMutations } from './mutations';
import { productActions, manufacturerActions, loggedInActions } from './actions';

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
    isLoggedIn: false,
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
  getters: Object.assign({}, productGetters, manufacturerGetters, counterGetter, isLoggedInGetter),
  actions: Object.assign({}, productActions, manufacturerActions, loggedInActions),
  // eslint-disable-next-line
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations, loggingInMutations),
});
