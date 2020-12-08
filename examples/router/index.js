import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

let router = new VueRouter({
   base: '',
   mode: 'history',
   routes: routes 
})
export default router