import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
// import Home from '../views/Home.vue  '
import findTiket from '../views/Find_Tiket.vue'
import myBooking from '../views/My_Booking.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import flightDetail from '../views/Flight_Detail.vue'
import landing from '../views/landing.vue'
import User from '../views/User.vue'
import DetailBooking from '../views/DetailBooking.vue'
import EditBooking from '../views/EditBooking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: landing
  },
  {
    path: '/DetailBooking',
    name: 'Detail',
    component: DetailBooking
  },
  {
    path: '/EditBooking',
    name: 'Edit',
    component: EditBooking
  },
  {
    path: '/findtiket',
    name: 'findTiket',
    component: findTiket,
    meta: { requiresAuth: true }
  },
  {
    path: '/mybooking',
    name: 'myBooking',
    component: myBooking,
    meta: { requiresAuth: true }
  },
  {
    path: '/flightdetail',
    name: 'flightDetail',
    component: flightDetail
  },
  {
    path: '/landing',
    name: 'landing',
    component: landing
  },
  {
    path: '/flightdetail/:id_airlines',
    name: 'flightDetail',
    component: flightDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.islogin && typeof store.state.token !== 'undefined') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.islogin && typeof store.state.token !== 'undefined') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
