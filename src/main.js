import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/axios'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
