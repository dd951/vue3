<template>
  <div class="history">
    <h2>Company History</h2>
    <p>{{ company }} was established in {{ establishYear }}!</p>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  let route = useRoute();

  let {company, establishYear} = route.query;
</script>

<style scoped>
.history {
  text-align: center;
  padding: 20px;
}
</style>