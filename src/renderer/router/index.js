import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: require('@/components/template/DefaultTemplate').default,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: require('@/views/Dashboard.vue').default,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/pages',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: require('@/views/Login').default
        },
        {
          path: 'register',
          name: 'Register',
          component: require('@/views/Register').default
        },
        {
          path: '404',
          name: 'Page404',
          component: require('@/views/Page404').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let token = localStorage.getItem('token')
    if (token != null) {
      next()
    } else {
      next({name: 'Login'})
    }
  }
  next()
})

export default router
