import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/style.scss';  //全局css

import * as echarts from 'echarts' //引入echart
Vue.prototype.$echarts = echarts  //全局化echarts属性
Vue.use(ElementUI);
Vue.use(dataV);   //使用插件

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
