import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TeamView from '../views/about/TeamView.vue'
import HistoryView from '../views/about/HistoryView.vue'

// 创建路由器
const router = createRouter({
  // 路由的工作模式采用 history
  history: createWebHistory(),
  // 路由数组用来配置多个路由
  routes: [
    // 其中一个路由
    {
      name: 'home',
      path: '/home',        // key
      component: HomeView,  // 组件
    },
    // 另一个路由
    {
      name: 'about',
      path: '/about',       // key
      component: AboutView, // 组件
      // 子路由组件
      children: [
        {
          name: 'team',
          path: 'team/:company/:members?', // 动态参数语法，:company 和 :members 是参数名，会被解析为 params 对象（另外需要注意 ? 的作用是用来设置参数的必要性。?表示可传可不传。）
          component: TeamView
        },
        {
          name: 'history',
          path: 'history/:company/:establishYear', // 动态参数语法
          component: HistoryView
        },
      ]
    }
  ]
})

// 将路由器导出
export default router