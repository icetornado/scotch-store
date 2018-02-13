// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
// import { Card } from 'bootstrap-vue/es/components';
import VueToastr from '@deveodk/vue-toastr';

import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import store from './store';
import NavApp from './components/NavApp';

import {
  ERROR_MSG,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
} from './store/mutation-types';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultType: 'info',
  defaultTimeout: 1000,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // VueToastr,
  template: '<App/>',
  components: { App, NavApp },
  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ERROR_MSG:
            this.$toastr('error', mutation.payload.content, mutation.payload.title);
            break;
          case ADD_PRODUCT_SUCCESS:
            this.$toastr('success', 'Product created.', 'Success!');
            break;
          case UPDATE_PRODUCT_SUCCESS:
            this.$toastr('success', 'Product updated.', 'Success!');
            break;
          case REMOVE_PRODUCT_SUCCESS:
            this.$toastr('warning', 'Product deleted.', 'Deleted!');
            break;
          default:
            break;
        }
      }
    });
  },
});

