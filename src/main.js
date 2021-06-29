import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

import 'font-awesome/css/font-awesome.min.css'
//bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
