<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page.</p>

    <!-- 子路由导航链接 -->
    <nav>
      <!-- 第一种方式：拼接字符串 -->
      <!-- <router-link :to="`/about/team?company=${company}&members=${members}`" active-class="active">Team</router-link>
      <router-link :to="`/about/history?company=${company}&establishYear=${establishYear}`" active-class="active">History</router-link> -->
      <!-- 第二种方式：对象形式传参，但是对象query属性名不能随便写，必须写query这个单词。query后面我写的是对象的简写形式，写对象完整格式也是对的。 -->
      <router-link :to="{ path: '/about/team', query: { company, members } }" active-class="active">Team</router-link>
      <router-link :to="{ path: '/about/history', query: { company, establishYear } }"
        active-class="active">History</router-link>
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