import Vue from 'vue'
import App from './App.vue'
import router from './router'
import state from './state'

import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  data () {
    return state
  },
  router,
  render: h => h(App)
}).$mount('#app')
