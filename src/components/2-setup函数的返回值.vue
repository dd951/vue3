<!-- 
setup 函数的返回值可以是：
1. 可以返回一个对象
  setup 返回的对象会暴露给模板（<template>）使用，模板可以直接访问对象的属性和方法。
2. 也可以返回一个渲染函数
  如果 setup 直接返回一个渲染函数，则组件的 <template> 会被完全忽略，渲染函数的输出会直接替代模板内容。 
-->
<template>
    <div class="person">
        <!-- <h2>姓名：{{ name }}</h2>
        <button @click="showTel">查看手机号</button> -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    setup() {

        let name = '张三';
        let tel = '13000000000';

        function showTel(): void {
            alert(`手机号：${tel}`);
        }

        // 返回渲染函数
        // return function() {
        //     return "渲染内容";
        // };

        return () => "渲染内容";
    }
}
</script>

<style scoped>
.person {
    background-color: #3d3196;
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}
</style>