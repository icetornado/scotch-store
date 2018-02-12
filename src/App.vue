<template>
  <div id="app">
    <div class="container-fluid">
      <img src="./assets/logo.png">
    </div>
    <nav-app></nav-app>
    <router-view/>
    <!--
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
    -->
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/open-iconic/font/css/open-iconic-bootstrap.min.css';
import NavApp from './components/NavApp';

export default {
  components: { NavApp },
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
  font-size: 40px;
  padding: 10px 10px 0 10px;
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
