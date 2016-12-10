import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import home from 'components/home/home';
import store from 'components/store/store';
import news from 'components/news/news';
import mine from 'components/mine/mine';

import 'common/stylus/index.styl' ;

Vue.use(VueRouter);

// 传入的App就是挂载的组件
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

// map方法配置路由
router.map({
  '/home': {
    component: home
  },
  '/store': {
    component: store
  },
  '/news': {
    component: news
  },
  '/mine': {
    component: mine
  }
});
// 开始注入， ’#app‘为挂载点
router.start(app, '#app');
// 默认进入的页面
router.go('/home');
