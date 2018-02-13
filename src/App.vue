<template>
  <div id="app">
    <b-container fluid>
      <img src="./assets/logo.png">
    </b-container>
    <nav-app></nav-app>
    <router-view/>

    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>

  </div>

</template>

<script>
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/open-iconic/font/css/open-iconic-bootstrap.min.css';

import NavApp from './components/NavApp';

export default {
  components: { NavApp },
  name: 'app',
  computed: {
    showLoader() {
      return this.$store.state.showLoader;
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
.overlay {
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.loading-spinner {
  position : absolute;
  top      : 50%;
  left     : 50%;
  -webkit-transform : translateX(-50%) translateY(-50%);
  -moz-transform : translateX(-50%) translateY(-50%);
  transform : translateX(-50%) translateY(-50%);
}
.dot {
  background    : black;
  border-radius : 100%;
  color         : white;
  height        : 8px;
  line-height   : 8px;
  text-align    : center;
  width         : 8px;
}
.dotOne {
  -webkit-animation : dotOneKeyframes 5s ease  infinite;
  background        : #F9E610;
  position          : absolute;
  top               : 0;
  left              : 0;
}
.dotTwo {
  -webkit-animation : dotTwoKeyframes 5s ease 0.4166666666666s infinite;
  background        : #EFDB06;
  position          : absolute;
  top               : 0;
  left              : 14px;
}
.dotThree {
  -webkit-animation : dotThreeKeyframes 5s ease 0.83333333333s infinite;
  background        : #DBC906;
  position          : absolute;
  top               : 14px;
  left              : 14px;
}
@-webkit-keyframes dotOneKeyframes {
  0% {
    top  : 0;
    left : 0;
  }
  8.3333333333% {
    top  : 14px;
    left : 0;
  }
  16.6666666666% {
  }
  25% {
    top  : 14px;
    left : 0;
  }
  33.3333333333% {
    top  : 14px;
    left : 14px;
  }
  41.6666666666% {
  }
  50% {
    top  : 14px;
    left : 14px;
  }
  58.3333333333% {
    top  : 0;
    left : 14px;
  }
  66.6666666666% {
  }
  75% {
    top  : 0;
    left : 14px;
  }
  83.3333333333% {
    top  : 0;
    left : 0;
  }
  91.6666666666% {
  }
  100% {
  }
}
@-webkit-keyframes dotTwoKeyframes {
  0% {
    top  : 0;
    left : 14px;
  }
  8.3333333333% {
    top  : 0;
    left : 0;
  }
  16.6666666666% {
  }
  25% {
    top  : 0;
    left : 0;
  }
  33.3333333333% {
    top  : 14px;
    left : 0;
  }
  41.6666666666% {
  }
  50% {
    top  : 14px;
    left : 0;
  }
  58.3333333333% {
    top  : 14px;
    left : 14px;
  }
  66.6666666666% {
  }
  75% {
    top  : 14px;
    left : 14px;
  }
  83.3333333333% {
    top  : 0;
    left : 14px;
  }
  91.6666666666% {
  }
  100% {
  }
}
@-webkit-keyframes dotThreeKeyframes {
  0% {
    top  : 14px;
    left : 14px;
  }
  8.3333333333% {
    top  : 0;
    left : 14px;
  }
  16.6666666666% {
  }
  25% {
    top  : 0;
    left : 14px;
  }
  33.3333333333% {
    top  : 0;
    left : 0;
  }
  41.6666666666% {
  }
  50% {
    top  : 0;
    left : 0;
  }
  58.3333333333% {
    top  : 14px;
    left : 0;
  }
  66.6666666666% {
  }
  75% {
    top  : 14px;
    left : 0;
  }
  83.3333333333% {
    top  : 14px;
    left : 14px;
  }
  91.6666666666% {
  }
  100% {
  }
}
</style>
