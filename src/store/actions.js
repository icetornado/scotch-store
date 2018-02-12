import axios from 'axios';
import { getAccessToken } from '../../utils/auth';
import * as constants from '../config';
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  ADD_MANUFACTURER_FAILURE,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER_FAILURE,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  MANUFACTURER_BY_ID_FAILURE,
  DELETE_MANUFACTURER,
  DELETE_MANUFACTURER_SUCCESS,
  DELETE_MANUFACTURER_FAILURE,
} from './mutation-types';


const API_BASE = constants.default;

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);
    console.log('i am getting all prods', ALL_PRODUCTS);
    axios.get(`${API_BASE}/products`).then((response) => {
      commit(ALL_PRODUCTS_SUCCESS, response.data);
    });
  },
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);
    axios.get(`${API_BASE}/products/${payload}`).then((response) => {
      console.log('get prod by id');
      console.log(payload, response.data);
      commit(PRODUCT_BY_ID_SUCCESS, response.data);
    });
  },
  addProduct({ commit }, payload) {
    commit(ADD_PRODUCT);
    axios.post(`${API_BASE}/products`, payload, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then((response) => {
      commit(ADD_PRODUCT_SUCCESS, response.data);
    });
  },
  updateProduct({ commit }, payload) {
    commit(UPDATE_PRODUCT);
    console.log('AFTER commit update product');
    // eslint-disable-next-line
    axios.put(`${API_BASE}/products/${payload._id}`, payload, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then((response) => {
      console.log('before commit update success', response.data);
      commit(UPDATE_PRODUCT_SUCCESS, response.data);
    });
  },
  removeProduct({ commit }, payload) {
    commit(REMOVE_PRODUCT);
    axios.delete(`${API_BASE}/products/${payload}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then((response) => {
      console.debug('remove response', response.data);
      commit(REMOVE_PRODUCT_SUCCESS, response.data);
    });
  },
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(ALL_MANUFACTURERS);
    axios.get(`${API_BASE}/manufacturers`).then((response) => {
      commit(ALL_MANUFACTURERS_SUCCESS, response.data);
    });
  },
  manufacturerById({ commit }, payload) {
    commit(MANUFACTURER_BY_ID);
    axios.get(`${API_BASE}/manufacturers/${payload}`).then((response) => {
      console.log('get manu by id');
      console.log(payload, response.data);
      commit(MANUFACTURER_BY_ID_SUCCESS, response.data);
    }).catch((reason) => {
      commit(MANUFACTURER_BY_ID_FAILURE, reason);
    });
  },
  updateManufacturer({ commit }, payload) {
    console.log('update manufac with payload', payload);
    commit(UPDATE_MANUFACTURER);
    // eslint-disable-next-line
    axios.put(`${API_BASE}/manufacturers/${payload._id}`, payload, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then((response) => {
      commit(UPDATE_MANUFACTURER_SUCCESS, response.data);
    }).catch((reason) => {
      commit(UPDATE_MANUFACTURER_FAILURE, reason);
    });
  },
  addManufacturer({ commit }, payload) {
    commit(ADD_MANUFACTURER);
    axios.post(`${API_BASE}/manufacturers`, payload, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then((response) => {
      commit(ADD_MANUFACTURER_SUCCESS, response.data);
    }).catch((reason) => {
      commit(ADD_MANUFACTURER_FAILURE, reason);
    });
  },
  deleteManufacturer({ commit }, payload) {
    commit(DELETE_MANUFACTURER);
    axios.delete(`${API_BASE}/manufacturers/${payload}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then((response) => {
      commit(DELETE_MANUFACTURER_SUCCESS, response.data);
    }).catch((reason) => {
      commit(DELETE_MANUFACTURER_FAILURE, reason);
    });
  },
};
