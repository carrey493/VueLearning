import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    //延迟加载
    path: '/example01',
    name: 'Example01',
    component: () => import('@/views/example01/Example01.vue'),
  },
  {
    path: '/example02',
    name: 'Example02',
    component: () => import('@/views/example02/Example02.vue'),
  },
  {
    props: true,
    path: '/example03/students/:sid/homeworks/:hid',
    component: () => import('@/views/example03/Example03.vue'),
  },
  {
    path: '/example04',
    name: 'directive',
    component: () => import('@/views/example04/Example04.vue'),
    children: [
      {
        path: '/example04/01',
        name: 'text-if-show',
        component: () => import('@/views/example04/Example04-01.vue'),
      },
      {
        path: '/example04/02',
        name: 'v-bind',
        component: () => import('@/views/example04/Example04-02.vue'),
      },
      {
        path: '/example04/03',
        name: 'v-for',
        component: () => import('@/views/example04/Example04-03.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
