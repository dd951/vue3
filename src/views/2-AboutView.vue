<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page.</p>

    <!-- 子路由导航链接 -->
    <nav>
      <router-link to="/about/team" active-class="active">Team</router-link>
      <router-link to="/about/history" active-class="active">History</router-link>
    </nav>

    <!-- 子路由出口 -->
    <router-view />
  </div>
</template>

<script lang="ts" setup name="AboutView"></script>

<style scoped>
  .about {
    text-align: center;
    padding: 20px;
  }
</style>