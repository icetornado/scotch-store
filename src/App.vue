<template>
  <div id="app">
    <div class="col-sm-12">
      <img src="./assets/logo.png">
    </div>


    <nav class="navbar navbar-light bg-faded">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mr-auto">
            <!-- Navigation Links -->
            <router-link to="/" class="nav-item nav-link route-link">Home</router-link>
            <router-link to="/admin" class="nav-item nav-link route-link">Admin</router-link>
            <router-link to="/cart" class="nav-item nav-link route-link">Cart</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'app',
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
  padding: 0 10px 0 10px;
}
</style>
