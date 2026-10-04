<!-- 
Vue 官方建议模板中只应该包含简单的表达式，复杂的逻辑应该放在计算属性或方法中。模板中的复杂表达式会：
- 降低模板的可读性
- 使逻辑难以复用
- 增加维护难度
Vue 推崇将逻辑（JavaScript）与视图（模板）分离，这种字符串操作属于业务逻辑，应该放在脚本部分而不是模板中。 
-->
<template>
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <!-- 插值语法中可以编写表达式： -->
    全名：{{firstName.slice(0, 1).toUpperCase() + firstName.slice(1)}}-{{lastName}}
</template>

<script lang='ts' setup name="PersonInfo">
    import {ref } from 'vue';

    let firstName = ref('zhang');
    let lastName = ref('san');
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>