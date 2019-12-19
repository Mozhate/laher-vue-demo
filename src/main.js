// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(mavonEditor)

import MarkdownRun from 'vue-markdown-run';
// 全局注入
Vue.use(MarkdownRun);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
