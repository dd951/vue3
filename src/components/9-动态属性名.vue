<template>
    <!-- 动态属性名 -->
    <div :[attributeName]="value">动态属性名</div> <!-- 渲染结果 id="main-content" -->

    <!-- 绑定多个属性名 -->
    <div v-bind="objectOfAttrs">绑定多个属性名</div>
    <!--或者这样写-->
    <div :="objectOfAttrs">绑定多个属性名</div>
    <!-- 渲染结果 id="container" class="wrapper" data-attribute="example" -->
</template>

<script lang='ts' setup>
const attributeName = 'id';
const value = 'main-content';

const objectOfAttrs = {
    id: 'container',
    class: 'wrapper',
    'data-attribute': 'example'
};
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