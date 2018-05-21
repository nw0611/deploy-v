import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list/Index'
import Add from '@/components/Add/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
