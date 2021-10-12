import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Contacto from '../views/Contacto'
import Pedidos from '../views/Pedidos'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
<<<<<<< HEAD
  
  {
    path: '/pedidos',
    name: 'Pedidos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue')
=======
  {
    path: '/contacto',
    name: 'Contacto',
    component:Contacto
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component:Pedidos
>>>>>>> desarrollo
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
