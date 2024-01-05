import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const about = function () {
  return import('@/views/about.vue')
}

export default new VueRouter({
  routes: [ // (缩写) 相当于 routes: routes
    { path: '/about', component: about }
  ]
})
