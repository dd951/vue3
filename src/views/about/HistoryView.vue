<template>
  <div class="history">
    <h2>Company History</h2>
    <p>{{ route.params.company }} was established in {{ route.params.establishYear }}!</p>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  let route = useRoute();
</script>

<style scoped>
.history {
  text-align: center;
  padding: 20px;
}
</style>