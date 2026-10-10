<template>
  <div class="team">
    <h2>Our Team</h2>
    <!-- 可以这样取 -->
    <p>{{ route.query.company }} has {{ route.query.members }} member in total.</p>
    <!-- 也可以先对route.query对象进行解构 -->
    <p>{{ company }} has {{ members }} member in total.</p>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  // useRoute是一个函数，这个函数可以获取到当前路由组件对象。
  let route = useRoute();

  // route.query：从当前路由组件对象上获取query对象，query单词不能随便写，固定的。
  // 对象解构
  let {company, members} = route.query;

</script>

<style scoped>
.team {
  text-align: center;
  padding: 20px;
}
</style>