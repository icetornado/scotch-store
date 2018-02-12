<template>
  <div class="container-fluid">
    <ul class="nav navbar bg-info">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart" class="nav-link text-white">Cart <span class="badge badge-light">{{cartCount > 0 ? cartCount: ''}}</span></router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="isLoggedIn()" class="nav-link text-white" to="/admin/products">Admin</router-link>
      </li>

      <li>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <button class="btn btn-danger log" @click="handleLogout()" v-show="isLoggedIn()">Log out </button>
            <button class="btn btn-info log" @click="handleLogin()" v-show="!isLoggedIn()">Log In</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import { isLoggedIn, login, logout } from '../../utils/auth';

  export default {
    name: 'nav-app',
    computed: {
      cartCount() {
        return this.$store.state.cart.length;
      },
    },
    methods: {
      handleLogin() {
        login();
      },
      handleLogout() {
        logout();
      },
      isLoggedIn() {
        // return true;
        return isLoggedIn();
      },
    },
  };
</script>

<style scoped>

</style>
