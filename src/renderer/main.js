import Vue from 'vue'
import axios from 'axios'
import App from './App'
import BlockUI from 'vue-blockui'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BlockUI)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
