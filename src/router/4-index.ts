import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// 创建路由器
const router = createRouter({
  // 路由的工作模式采用 history
  history: createWebHistory(),
  // 路由数组用来配置多个路由
  routes: [
    // 其中一个路由
    {
      name: 'home',        // 为路由起名
      path: '/home',        // key
      component: HomeView,  // 组件
    },
    // 另一个路由
    {
      name: 'about',       // 为路由起名
      path: '/about',       // key
      component: AboutView, // 组件
      // 子路由组件 注意：子路由组件的 path不要以 /开始
      children: [
        {
          name: 'team',       // 为路由起名
          path: 'team',       // key
          component: () => import('../views/about/TeamView.vue') // 懒加载
        },
        {
          name: 'history',    // 为路由起名
          path: 'history',    // key
          component: () => import('../views/about/HistoryView.vue') // 懒加载
        }
      ]
    }
  ]
})

// 将路由器导出
export default router