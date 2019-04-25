import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '@/views/Tasks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: Tasks,
    },
  ]
})
