// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './store'
import directivePermission from '@/directive/permission'
import VueImgLazyLoad from 'vue-images-lazy-load';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(mavonEditor);

Vue.use(VueImgLazyLoad);

import MarkdownRun from 'vue-markdown-run';
// 全局注入
Vue.use(MarkdownRun);

// 自定义指令
Vue.directive('permission',directivePermission);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
