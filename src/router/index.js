import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login.vue'
import Report from '../pages/report.vue'
import List from '../pages/list.vue'
import Detail from '../pages/detail.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '',
      name: 'login',
      component: Login
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})
