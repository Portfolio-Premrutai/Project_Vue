import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Vue2Filters from "vue2-filters";
Vue.use(Vue2Filters);//gobal 



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
