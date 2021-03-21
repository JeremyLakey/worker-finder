import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Worker from '../views/Worker.vue'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/worker/:id',
    name: 'Worker',
    component: Worker
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
