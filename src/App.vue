<template>
  <div id="app">
    <div class="container-fluid">
      <img src="./assets/logo.png">
    </div>

    <div class="container-fluid">
      <ul class="nav navbar bg-info">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link text-white">Cart <span class="badge badge-light">{{cartCount > 0 ? cartCount: ''}}</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/admin/products">Admin</router-link>
        </li>

      </ul>
    </div>

    <router-view/>
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'app',
  computed: {
    cartCount() {
      return this.$store.state.cart.length;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.route-link {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  padding: 10px 10px 0 10px;
  color: azure;
}

.route-link-active {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bolder;
  font-size: 24px;
  padding: 10px 10px 0 10px;
  color: rgba(0,0,0,.9);
}
  .navbar {
    min-height: 30px;
  }

.form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
