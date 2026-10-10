<template>
  <div class="team">
    <h2>Our Team</h2>
    <!--通过子路由组件对象获取params对象。-->
    <p>{{ route.params.company }} has {{ route.params.members }} member in total.</p>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  // 获取子路由组件
  let route = useRoute();
</script>

<style scoped>
.team {
  text-align: center;
  padding: 20px;
}
</style>