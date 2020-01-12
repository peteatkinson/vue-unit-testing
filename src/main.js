import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";

import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

export default new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
