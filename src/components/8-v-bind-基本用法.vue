<!-- 
v-bind 是 Vue 中最常用的指令之一，它用于动态绑定 HTML 属性到 Vue 实例的数据上。
v-bind指令和数据是否为响应式无关，普通数据也能正常绑定。 
-->

<template>
    <div class="person">
        <!-- 完整语法 -->
        <img v-bind:src="imageSrc">
        &nbsp;&nbsp;
        <!-- 简写语法 -->
        <img :src="imageSrc">

        &nbsp;&nbsp;
        <!-- 绑定字符串 -->
        <a :href="url" target="_blank">点击这里</a>
        &nbsp;&nbsp;
        <!-- 绑定布尔值 -->
        <button :disabled="isButtonDisabled">提交</button>

        <!-- 绑定数组 -->
        <!-- v-bind允许绑定一个数组 -->
        <div :class="[activeClass, errorClass]" :abc="[activeClass, errorClass]"> <!-- 两个属性都会生效 渲染结果是：class="active text-danger" 如果不是 class属性，而是随意一个属性,渲染结果如下：abc="active,text-danger"-->
            这是一个带有动态类名的div元素
        </div>
        <!-- 请认真阅读以下注释信息： -->
        <!-- 以上代码如果变量activeClass和errorClass都有值的情况下，最终渲染结果如下 -->
        <!--
        <div class="active text-danger">
            这是一个带有动态类名的div元素
        </div>
        -->
        <!-- 以上代码如果变量activeClass有值，errorClass是空字符串的情况下，最终渲染结果如下 -->
        <!--
        <div class="active">
            这是一个带有动态类名的div元素
        </div>
        -->

        <!-- v-bind 允许绑定对象 -->
        <div :class="{ 'active': isActive, 'text-danger': hasError }">
            这是一个带有动态类名的div元素
        </div>
        <!-- 请详细阅读以下注释 -->
        <!-- 当变量 isActive 和 hasError都是true时，以上代码的最终渲染效果如下 -->
        <!-- 
        <div :class="active text-danger">
            这是一个带有动态类名的div元素
        </div>
        -->
        <!-- 当变量 isActive是true，hasError是false时，以上代码的最终渲染效果如下 -->
        <!-- 
        <div :class="active">
            这是一个带有动态类名的div元素
        </div>
        -->
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
const imageSrc = ref('https://picx.zhimg.com/70/v2-7fc9a69a54db03063eeb05d9f0ab257c_1440w.avis?source=172ae18b&biz_tag=Post');
const url = ref('https://www.baidu.com');
const isButtonDisabled = false;

const activeClass = 'active';
const errorClass = 'text-danger';

const isActive = true;
const hasError = true;
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}

img {
    width: 200px;
}

/* 基础样式 */
div {
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    /* 过渡效果 0.3秒内完成，使用ease曲线，all 是指所有属性 */
}

/* active 类样式 */
.active {
    background-color: #42b983;
    border: 1px solid #3aa876;
}

/* text-danger 类样式 */
.text-danger {
    color: #f56c6c;
    font-weight: bold;
}
</style>