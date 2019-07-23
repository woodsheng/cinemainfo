import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Scroller from '@/components/scroller'
Vue.component('Scroller' , Scroller);
import Loading from '@/components/loading'
Vue.component('Loading' , Loading);


Vue.config.productionTip = false
Vue.prototype.axios = axios



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
