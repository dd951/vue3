<!-- 
标签的ref属性
1、现代的开发方式都是 SPA 单网页应用。我们之前虽然编写了 App.vue和 Person.vue两个文件，
但最终渲染的时候都会渲染到同一个 html 文件中，因此在 Vue 组件中标记一个元素的时候尽量
不要使用 id属性，因为不同的 Vue 组件中可能会出现相同的 id，会因此产生覆盖和干扰。
此时：标签的 ref属性就用上了。

2、另外 ref属性还可以完成一个重要的任务：子组件向父组件传递数据。并且当子组件向父组件暴露
响应式数据时，在父组件中是可以修改这个响应式数据的。

3、虽然在 Person.vue和 App.vue组件中都存在 ref='myDiv'的元素，但是它俩是不同的两个元素。
底层是如何区分的？实现原理是什么？
每个 ref 在组件实例化时，都会创建独立的 DOM 引用，通过组件实例的作用域隔离，同名 ref 互不干扰。

另外需要特别注意的是：只有在页面渲染之后，脚本中的myDiv才会有值。渲染前脚本中的 myDiv是 undefined。
-->

<template>
    <!--原理第二步：页面渲染的时候将 dom元素赋值给 RefImpl对象的value属性。-->
    <div ref='myDiv'>这是Person组件中的一个div元素</div> <!--  ref 是 Vue 的特殊指令属性，Vue 编译器在编译阶段就会识别它，并自动与 <script setup> 中的同名变量建立关联，所以不需要（也不应该）用 v-bind  -->
    <button @click="showDiv">输出div元素</button>
</template>

<script lang='ts' setup name='PersonInfo'>
    import { ref } from 'vue';

    // 数据（myDiv变量代表的就是模板中的div元素）
    // 一定要注意：变量名一定要和模板中的ref属性的值一致才行。
    // 原理第一步：创建RefImpl对象。
    let myDiv = ref();

    // 在这里访问myDiv的话是undefined，这是因为myDiv是在页面渲染之后才会有值。
    console.log(myDiv.value);

    // 方法
    function showDiv(){
        // 这个方法是在页面渲染之后才会调用，因此这里的myDiv不是undefined。
        console.log(myDiv.value);
    }
</script>

<style scoped>
</style>