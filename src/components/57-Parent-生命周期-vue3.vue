<!-- 
Vue3 的生命周期
4 个阶段 7 个钩子：【提醒：以下讲解的是部分钩子，后期学习了路由等知识点后，还有其它钩子函数。】
第一阶段：创建（直接把代码写到 setup 函数中的代码自动会在创建组件时执行）：执行一次
第二阶段：挂载（挂载前 onBeforeMount、挂载完毕 onMounted）：执行一次
第三阶段：更新（更新前 onBeforeUpdate、更新完毕 onUpdated）：更新一次执行一次
第四阶段：卸载/销毁（卸载前 onBeforeUnmount、销毁完毕 onUnmounted）：执行一次（组件卸载才会触发）
常用钩子包括三个：
挂载完毕：onMounted
更新完毕：onUpdated
卸载前：onBeforeUnmount 
-->

<template>
    <div class="Parent">
        <h2>Parent</h2>
        <Sun v-if="isShow" />
    </div>
</template>

<script lang="ts" setup name="Parent">
    import { ref } from 'vue';
    import Sun from '../components/Sun.vue';

    let isShow = ref(true);
</script>

<style scoped>
    .Parent {
        background-color: #17e883;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>