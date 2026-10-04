<!-- 
v-memo（Vue 3 新增）
组件内任何在模板中使用的响应式数据变化 → 触发组件重新渲染 → 重新执行 render 函数 → 所有模板中的函数都会重新调用。
作用：缓存模板片段，仅在依赖项变化时重新渲染（优化性能）。 
-->
<template>
  <button @click="data++">其他组件更新 {{ data }}</button>
  
  <!-- 没有 v-memo：每次点击按钮都会重新计算 -->
  <!-- <div>
    无缓存：{{ expensiveCalculation() }}
  </div> -->
  
  <!-- 有 v-memo：点击按钮不会重新计算（因为依赖没变） -->
  <div v-memo="[dependency1, dependency2]">
    有缓存：{{ expensiveCalculation() }}
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  
  // 依赖项
  const dependency1 = ref(1);
  const dependency2 = ref(2);
  
  // 其他组件的数据
  const data = ref(0);
  
  const expensiveCalculation = () => {
    console.log("计算中...");
    return dependency1.value + dependency2.value;
  };
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>