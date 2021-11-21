import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/components/Content.vue'
import Page from '@/components/Page.vue'
import SinglePage from '@/components/SinglePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Content
  },
  {
    path: '/page/:slug',
    name: 'Page',
    component: Page
  },
  {
    path: '/singlepage/:slug',
    name: 'SinglePage',
    component: SinglePage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
