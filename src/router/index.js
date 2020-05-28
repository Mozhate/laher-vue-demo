import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import includePermission from '@/utils/permission'

Vue.use(Router);

const router = new Router({
  // mode:'history',
  routes: [
    {
      path:'/noPermission',
      name:'NoPermission',
      component:()=>import('@/components/NoPermission'),
    },
    {
      path: '/',
      component: () => import('@/components/Home'),
    },
    {
      path: '/trianglifyz',
      component: () => import('@/components/Trianglifyz'),
      meta:{
        permissions:['Trianglifyz']
      }
    },
    {
      path: '/editorz',
      component: () => import('@/components/Editorz'),
      meta:{
        permissions:['Editorz']
      }
    },
    {
      path: '/editorNew',
      component: () => import('@/components/EditorNew'),
      meta:{
        permissions:['EditorNew']
      }
    },
    {
      path: '/mavonEditor',
      component: () => import('@/components/MavonEditor'),
      meta:{
        permissions:['MavonEditor']
      }
    },
    {
      path: '/vmMarkdown',
      component: () => import('@/components/VmMarkdown'),
      meta:{
        permissions:['VmMarkdown']
      }
    },
    {
      path: '/vueEditor',
      component: () => import('@/components/VueEditor'),
      meta:{
        permissions:['VueEditor']
      }
    },
    {
      path: '/geopattern',
      component: () => import('@/components/Geopattern'),
      meta:{
        permissions:['Geopattern']
      }
    },
    {
      path: '/user',
      component: () => import('@/components/User'),
      meta:{
        permissions:['User']
      }
    },
    {
      path: '/userAdd',
      component: () => import('@/components/UserAdd'),
      meta:{
        permissions:['User_Add']
      }
    },
    {
      path: '/commPage',
      component: () => import('@/components/CommPage'),
    },
    {
      path: '/lazyImg',
      component: () => import('@/components/LazyImg'),
    },
    {
      path: '/codetest',
      component: () => import('@/components/codetest'),
    },
    {
      path: '/particles',
      component: () => import('@/components/Particles'),
    },
    {
      path: '/codeDiff',
      component: () => import('@/components/CodeDiff'),
    },
    {
      path: '/ribbonEffect',
      component: () => import('@/components/RibbonEffect'),
    },
    {
      path: '/shardGlass',
      component: () => import('@/components/ShardGlass'),
    },
    {
      path: '/todoList',
      component: () => import('@/components/TodoList'),
    },
    {
      path: '/notification',
      component: () => import('@/components/Notification'),
    },
    {
      path: '/color',
      component: () => import('@/components/Color'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const {permissions} = to.meta
  if(permissions){
    const is = includePermission(permissions)
    !is && (next({name: 'NoPermission'}))
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router;
