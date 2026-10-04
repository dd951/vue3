<template>
    <!-- 通过 v-model 实现双向数据绑定 -->
    <div>
        <input type="text" v-model="inputValue">
        <div>您输入的用户名为：{{ inputValue }}</div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const inputValue = ref('jackson');
</script>

<style scoped>
div {
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    /* 过渡效果 0.3秒内完成，使用ease曲线，all 是指所有属性 */
}
</style>