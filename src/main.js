import Vue from 'vue'
import Axios from './plugins/axios'
import App from './App.vue'
import './plugins/iview.js'


Vue.config.productionTip = false
Vue.component('axios',Axios)
new Vue({
  render: h => h(App),
}).$mount('#app')