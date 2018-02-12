import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home/Home'

import Car from '@/pages/car/Car'

Vue.use(Router)



const routes = [

    {
    path: '/',
    name: 'home',
    component: Car
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
   }
];

export default new Router({
  routes: routes
});
