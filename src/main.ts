import { createApp } from 'vue'
import App from './App.vue'

// 导入路由器
import router from './router'

// 创建app
const app = createApp(App)

// app使用路由器
app.use(router)

// 将app挂载到容器
app.mount('#app')