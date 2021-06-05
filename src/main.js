import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)
Vue.config.productionTip = false
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)
const axios = require('axios')
axios.defaults.baseURL = "https://piecesdautocpf.ca/api";
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
