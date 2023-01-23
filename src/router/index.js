import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import CartView from '../views/CartView.vue'
import SuccessPage from '../views/SuccessPage.vue'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
  { 
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  { 
    path: '/success',
    name: 'Success',
    component: SuccessPage
  },
  { 
    path: '/error',
    name: 'Error',
    component: ErrorPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
