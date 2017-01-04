import Page1 from './components/Page1'
import Page2 from './components/Page2'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Page1
  }, {
    path: '/Page1',
    component: Page1
  }, {
    path: '/Page2',
    component: Page2
  }]
})

export default router;
