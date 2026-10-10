<!-- 
 Parent-封装Hooks的优势
 第一步：在 src 目录下新建 hooks 目录。
 第二步：在 hooks 目录下新建 useCount.ts，编写代码。
 第三步：在 hooks 目录下新建 useImg.ts，编写代码。
 第四步：在 Sun.vue 组件中使用 Hook

 Hooks中支持生命周期钩子
 例如，我要在页面加载完毕后，count 计数器的初始值设置为 10。可以这样修改 useCount.ts这个 Hooks：
    onMounted(()=>{
        count.value = 10;
    });

注意事项
1. 命名约定：自定义 Hook 通常以 use 开头，以便识别
2. 组合式 API 限制：Hooks 只能在 <script setup> 或 setup() 函数中使用
3. 响应式保持：返回响应式状态时，确保使用 ref 或 reactive 包装
4. 生命周期：可以在 Hook 中使用生命周期钩子（也可以使用计算属性，以及监视 watch....）
-->
<template>
    <div class="Parent">
        <h2>Parent</h2>
        <Sun />
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Sun from '../components/Sun.vue';
</script>

<style scoped>
    .Parent {
        background-color: #17e883;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>