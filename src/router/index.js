import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

const router = new Router({
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
    {
      path: '/mavonEditor',
      component: () => import('@/components/MavonEditor'),
    },
    {
      path: '/vmMarkdown',
      component: () => import('@/components/VmMarkdown'),
    },
    {
      path: '/vueEditor',
      component: () => import('@/components/VueEditor'),
    },
    {
      path: '/geopattern',
      component: () => import('@/components/Geopattern'),
    },
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
