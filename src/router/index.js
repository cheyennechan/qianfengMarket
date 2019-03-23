import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Search from '@/components/search'
import Index from '@/components/homePage/index'
import LoginIn from '@/components/homePage/loginIn'
import LoginUp from '@/components/homePage/loginUp'
import Classify from '@/components/classify/classify'
import User from '@/components/personal/user'
import Cart from '@/components/cart/cart'
import Setup from '@/components/personal/setup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/',
      name: 'home',
      redirect: {
        'name': 'index'
      },
      component: Home,
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: Index,
          children: [
            {
              path: '/home/index/loginIn',
              name: 'loginIn',
              component: LoginIn,
              children:
                [
                  {
                    path: '/home/index/loginIn/loginUp',
                    name: 'loginUp',
                    component: LoginUp,
                  }
                ]
            }]
        },
        {
          path: '/home/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/home/classify',
          name: 'classify',
          component: Classify
        },
        {
          path: '/home/user',
          name: 'user',
          component: User
        },
        {
          path: '/home/setup',
          name: 'setup',
          component: Setup
        }

      ]
    }
  ]
})
