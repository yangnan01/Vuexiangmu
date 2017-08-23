import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import App from './App.vue';
import Vip from './components/Vip/vip.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';


import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';


Vue.use(MintUi);

import './static/libs/mui-master/dist/css/mui.css';

import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {path:'/',redirect:{name:'/home'}},
    { name: 'home', path: '/home', component: Home },
    { name: 'vip', path: 'vip', component: Home },
    { name: 'shopcart', path: '/shopcart', component: Shopcart },
    {name:'search',path:'/search',component:Search}
  ]
})

new Vue({
  el: '#app',
  router,
  render:c=>c(App)
})