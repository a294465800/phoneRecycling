import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import RecycleIndex from '@/components/recycle/recycleIndex'
import Mine from '@/components/mine/mine'
import RecycleOrderList from '@/components/mine/recycleOrderList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '',
      name: 'RecycleIndex',
      component: RecycleIndex
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }]
  }, {
    path: '/order/recycle',
    name: 'RecycleOrderList',
    component: RecycleOrderList
  }]
})
