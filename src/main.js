// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// cubeUI Component
import { Toast } from 'cube-ui'
Vue.use(Toast)

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = axios
Vue.prototype.baseURL = process.env.API_ROOT

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});

// vm.prototype.$toast = {a:'aaa'}


// function toast({txt,type,time,mask}){
//   const toastEle = this.$createToast({
//     txt: txt || "Loading...",
//     mask: mask || true ,
//     type: type || 'loading',
//     time: time || 0
//   });
//   toastEle.show();
//   return toastEle.hide;
// };

