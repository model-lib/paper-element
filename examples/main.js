import Vue from 'vue'
import App from './App.vue'
import router  from '@/examples/router'
import PaperElement from '@/packages'
Vue.use(PaperElement)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
