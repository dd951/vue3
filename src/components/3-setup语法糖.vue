<!-- 
第一个 script 标签中的代码负责默认导出，实际上在 vue 中默认导出的 script 实际上是可以省略的，
当你省略掉之后，会自动生成默认导出。默认导出的名字和文件名自动保持一致，如果你有特殊需求的话，
第一个 script 可以留着。

组件自动注册
在 Vue3 中如果使用了 setup 语法糖，import 的组件会自动注册，不需要再编写注册的代码，之前 App.vue 代码是这样写的：
<script>
    import Person from './components/Person.vue';

    export default {
        name: "MyApp", 
        // 手动注册组件
        components: {
            Person
        }
    }
</script>

可以简写为：使用 setup 语法糖后，不需要手动注册。
<script lang="ts" setup name="MyApp">
    import Person from './components/Person.vue';
</script>
-->
<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- 这个script只负责导出当前组件 -->
<script lang="ts">
export default {
    name: 'Person' // 这个名字设置devtools中显示的组件节点名字。
}
</script>

<!-- setup语法糖 -->
<!-- 这个script专门编写setup函数中的代码 -->
<script lang="ts" setup>
// 数据
let name = '张三';
let tel = '13000000000';
// 方法
function showTel() {
    alert(`手机号：${tel}`);
}
// 最终这些数据和方法会自动暴露给模板
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}
</style>