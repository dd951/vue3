<!-- 视图模板 -->
<template>
    <!-- html：组件结构 -->
    <div class="hello">
        <h1>hello vue3!</h1>
        <div ref="myDiv">这是App组件中的一个div元素</div>
        <button @click="showDiv">输出div元素</button>
        <!-- 第三步：使用Person组件 -->
        <Person></Person>
    </div>
</template>

<!-- 组件逻辑 -->
<!-- <script>
// 第一步：导入Person组件
import Person from './components/Person.vue';

// Vue2的语法：
// 对外暴露组件，这种导出方式为：默认导出
// 默认导出后，在main.ts中的import App from './App.vue';就是用来导入它的。
export default {
    name: 'MyApp',  // 这个name主要用于在开发者工具（DevTools）显示组件的节点名称（方便调试）。

    // 第二步：注册Person组件
    components: { // {Person: Person} 的缩写
        Person
    }
}
</script> -->

<!-- 使用 setup 语法糖后，不需要手动注册。 -->
<script lang="ts" setup name="MyApp">
    import { ref } from 'vue';
    import Person from './components/Person.vue';

    // 数据
    let myDiv = ref();

    // 方法
    function showDiv(){
        console.log(myDiv.value);
    }
</script>

<!-- 组件样式 -->
<!-- scoped表示该样式为局部样式，只对当前组件有效，如果省略表示全局样式 -->
<style scoped>

    /* css：组件样式 */
    .hello {
        /* 设置背景颜色为浅灰色 (#b5f0ee) */
        background-color: #b5f0ee;
        /* 水平阴影偏移量0px，垂直阴影偏移量0px，阴影模糊半径15px */
        box-shadow: 0 0 15px;
        /* 设置15px的圆角边框 */
        border-radius: 15px;
        /* 定义内边距为15px */
        padding: 15px;
    }
</style>