import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/Customers.vue'
import Targets from './views/Targets.vue'
import Other from './views/Other.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/targets',
      name: 'targets',
      component: Targets
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
