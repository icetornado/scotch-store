// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER_FAILURE,
  DELETE_MANUFACTURER,
  DELETE_MANUFACTURER_SUCCESS,
  ERROR_MSG,
  SET_LOGIN_STATE,
  SET_LOGOUT_STATE,
  // GET_LOGIN_STATE,
} from './mutation-types';

import { isLoggedIn } from '../../utils/auth';

export const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
    // this[]
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.products = payload;
  },
  [PRODUCT_BY_ID](state) {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;
    state.product = payload;
  },
  [ADD_PRODUCT]: (state) => {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.products.push(payload);
  },
  [ADD_PRODUCT_FAILURE]: (state) => {
    state.showLoader = false;
  },
  [UPDATE_PRODUCT]: (state) => {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    // console.log('payload in update product success', payload);
    // console.log('products in state before map', state.products);
    state.products = state.products.map((p) => {
      // console.log('p in update product success', p);
      // eslint-disable-next-line
      if (p._id === payload._id) {
        // eslint-disable-next-line
        payload = {...payload,manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]
        };
        return payload;
      }
      return p;
    });
    // console.log('products in state after map', state.products);
  },
  // eslint-disable-next-line
  [REMOVE_PRODUCT]: (state, payload) => {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    // eslint-disable-next-line
    const index = state.products.findIndex(p => p._id === payload);
    console.debug('index', index);
    state.products.splice(index, 1);
  },
  // eslint-disable-next-line
  [ERROR_MSG]: (state, payload) => {},
};

export const cartMutations = {
  // eslint-disable-next-line
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload._id),
  [REMOVE_FROM_CART]: (state, payload) => {
    // eslint-disable-next-line
    const index = state.cart.findIndex(p => p._id === payload);
    state.cart.splice(index, 1);
    console.log(state.cart, state.cart.length, index);
  },
};

export const manufacturerMutations = {
  [ALL_MANUFACTURERS](state) {
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.manufacturers = payload;
  },
  [MANUFACTURER_BY_ID](state) {
    state.showLoader = true;
  },
  [MANUFACTURER_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;
    state.product = payload;
  },
  // eslint-disable-next-line
  [ADD_MANUFACTURER]: (state, payload) => {
    state.showLoader = true;
  },
  // eslint-disable-next-line
  [ADD_MANUFACTURER_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.manufacturers.push(payload);
  },
  [UPDATE_MANUFACTURER]: (state) => {
    console.log('payload in update manufacturer');
    state.showLoader = true;
  },
  // eslint-disable-next-line
  [UPDATE_MANUFACTURER_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    // state.manufacturers.push(payload);
    state.manufacturer = payload;
    state.manufacturers = state.manufacturers.map((m) => {
      // eslint-disable-next-line
      if (m._id === payload._id) {
        // eslint-disable-next-line
        // payload = {...payload, m.name: payload.name};
        return payload;
      }
      return m;
    });
  },
  // eslint-disable-next-line
  [UPDATE_MANUFACTURER_FAILURE]: (state, payload) => {
    state.showLoader = false;
    console.log('Failed to update');
  },
  [DELETE_MANUFACTURER]: (state) => {
    console.log('delete manu');
    state.showLoader = true;
  },
  [DELETE_MANUFACTURER_SUCCESS]: (state, payload) => {
    console.log('delete manu success', payload);
    // eslint-disable-next-line
    const index = state.manufacturers.findIndex(m => m._id === payload);
    state.manufacturers.splice(index, 1);
    state.showLoader = false;
  },
};

export const loggingInMutations = {
  [SET_LOGIN_STATE]: (state) => {
    console.log('set login state here');
    state.isLoggedIn = isLoggedIn();
  },
  [SET_LOGOUT_STATE]: (state) => {
    console.log('set logout state here');
    state.isLoggedIn = isLoggedIn();
  },

};
