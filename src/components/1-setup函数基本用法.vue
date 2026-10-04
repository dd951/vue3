<!-- 
 setup 是 Vue3 组合式 API 的核心入口函数（几乎所有组合式的 API 都是要写在这个
  setup 函数中的），它在组件初始化时最先执行，集中管理当前组件中的逻辑（状态、方法、生命周期等），并返回视图模板可访问的内容。（这里的模板是指 <template>标签）
知识点总结：
1. 插值语法：{{ }}
2. 绑定事件：@click【或者使用 v-on 指令，代码如：v-on:click】
3. setup 函数中提供的数据和方法最终必须通过 return 的方式交出去，这样模板才能解析。
4. 对象的简写形式：{name: name, showTel: showTel}可以简写为 {name, showTel}
5.1.2. 第二步：编写 Ap
-->
<template>
    <div class="person">
        <!-- 插值语法：{{}} -->
        <h2>姓名：{{ name }}</h2>
        <!-- 绑定事件 -->
        <!-- <button @click="showTel">查看手机号</button> -->
        <button v-on:click="showTel">查看手机号</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    setup() {

        // 数据
        let name = '张三';
        let tel = '13000000000';

        // 方法
        function showTel(): void {
            alert(`手机号：${tel}`);
        }

        // setup函数的返回值非常重要，返回值会自动交给模板来处理。模板就是从这个值中自动解析数据。
        //return {name: name, showTel: showTel};

        // name和value同名，可以使用对象简写形式
        return { name, showTel };
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