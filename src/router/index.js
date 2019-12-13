import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/Home'),
    },
    {
      path: '/trianglifyz',
      component: () => import('@/components/Trianglifyz'),
    },
    {
      path: '/editorz',
      component: () => import('@/components/Editorz'),
    },
  ]
})
