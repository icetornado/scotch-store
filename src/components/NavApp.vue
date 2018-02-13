<template>
    <b-navbar variant="info" type="dark" :sticky="sticky" class="navbar-expand-md">

      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/cart">Cart <span class="badge badge-light">{{cartCount > 0 ? cartCount: ''}}</span></b-nav-item>
        <b-nav-item v-show="isLogged" to="/admin/products">Admin</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item><button class="btn btn-danger log" @click="handleLogout()" v-show="isLogged">Log out </button></b-nav-item>
        <b-nav-item><button class="btn btn-info log" @click="handleLogin()" v-show="!isLogged">Log In</button></b-nav-item>
      </b-navbar-nav>

    </b-navbar>

    <!--
    <ul class="nav navbar bg-info">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart" class="nav-link text-white">Cart <span class="badge badge-light">{{cartCount > 0 ? cartCount: ''}}</span></router-link>
      </li>
      <li class="nav-item">
        <router-link v-show="isLogged" class="nav-link text-white" to="/admin/products">Admin</router-link>
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
    -->

</template>

<script>
  import { isLoggedIn, login, logout } from '../../utils/auth';

  export default {
    name: 'nav-app',
    // eslint-disable-next-line
    data: function () {
      return {
        sticky: true,
      };
    },
    computed: {
      cartCount() {
        return this.$store.state.cart.length;
      },
      isLogged() {
        console.log('is logged in in store?', this.$store.state.isLoggedIn);
        if (!this.$store.state.isLoggedIn && isLoggedIn()) {
          this.$store.dispatch('loggedIn').then((response) => {
            console.log('logged in response in navbar', response);
            // ok = true;
          }).catch((error) => {
            console.log('log in error in navbar', error);
            // ok = false;
          });
        }
        return this.$store.state.isLoggedIn;
      },
    },
    methods: {
      handleLogin() {
        login();
      },
      handleLogout() {
        logout();
      },
    },
  };
</script>

<style scoped>

</style>
