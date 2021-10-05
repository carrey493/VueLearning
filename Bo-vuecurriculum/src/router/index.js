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
    name: 'Example03',
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
  {
    name: 'Example05',
    path: '/example05',
    component: () => import('../views/example05/Example05.vue'),
    children: [
      {
        path: '/example05/01',
        name: 'bindings',
        component: () => import('@/views/example05/Example05-01.vue'),
      },
      {
        path: '/example05/02',
        name: 'v-model',
        component: () => import('@/views/example05/Example05-02.vue'),
      },
    ],
  },
  {
    name: 'Example06',
    path: '/example06',
    component: () => import('../views/example06/Example06.vue'),
    children: [
      {
        path: '/example06/01',
        name: 'Basic binding',
        component: () => import('@/views/example06/Example06-01.vue'),
      },
      {
        path: '/example06/02',
        name: 'Synchronous binding',
        component: () => import('@/views/example06/Example06-02.vue'),
      },
      {
        path: '/example06/03',
        name: 'Asynchronous binding',
        component: () => import('@/views/example06/Example06-03.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
