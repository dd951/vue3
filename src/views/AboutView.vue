<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page.</p>

    <!-- 子路由导航链接 -->
    <nav>
      <!-- 第一种方式： -->
      <!-- <router-link :to="`/about/team/${company}/${members}`" active-class="active">Team</router-link>
      <router-link :to="`/about/history/${company}/${establishYear}`" active-class="active">History</router-link> -->
      <!-- 第二种方式：注意，1. 如果使用 params 参数，:to后面的对象的属性中不能使用 path，必须使用 name。 -->
       <!-- 2. 使用 params 参数时，不能传递数组或对象。 -->
      <router-link :to="{name: 'team', params: {company, members}}" active-class="active">Team</router-link>
      <router-link :to="{name: 'history', params: {company, establishYear}}" active-class="active">History</router-link>
    </nav>
    
    <!-- 子路由出口 -->
    <router-view />

  </div>
</template>

<script lang="ts" setup name="AboutView">

  import { ref } from 'vue';

  // 公司名
  let company = ref('极课未来');
  // 成员数量
  let members = ref(1);
  // 成立年份
  let establishYear = ref('2025');

</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}
.link {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
nav {
  padding: 20px 0;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
nav a.active {
  color: #42b983;
}
</style>