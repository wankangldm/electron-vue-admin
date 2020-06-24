import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
// import '@/permission' // permission control

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
