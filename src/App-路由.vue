<template>
  <div id="app">
    <!-- nav 在 HTML 中就是一个语义化标签，本质上和 div 一样都是块级容器，但多了语义含义 -->
    <nav>
      <!-- 路由入口，to属性提供path，active-class属性用来设置当前链接被激活时的样式 -->
      <!-- <RouterLink to="/home" active-class="active">Home</RouterLink>
      <RouterLink to="/about" active-class="active">About</RouterLink> -->

      <router-link :to="{path: '/home'}" active-class="active">Home</router-link>
      <router-link :to="{path: '/about'}" active-class="active">About</router-link>

      <!-- <RouterLink :to="{name: 'home'}" active-class="active">Home</RouterLink> -->
      <!-- <RouterLink :to="{name: 'about'}" active-class="active">About</RouterLink> -->
    </nav>
    <!-- 路由出口：内容将来显示在这里 -->
    <!-- 一个项目中路由出口可以有多个，Vue在底层是如何选择出口的？-->
    <!-- 底层会根据路径最佳匹配/最精确匹配原则进行出口的选择。 -->
    <!-- 如果是同级出口，则需要在 <RouterView> 标签中编写 name 属性用来指定。-->
    <RouterView />
  </div>
</template>

<script lang="ts" setup name="App">
  // RouterView和RouterLink都是全局注册的组件，因此以下import语句可写可不写。
  //import { RouterView, RouterLink } from 'vue-router';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

.active {
  color: #42b983;
}
</style>