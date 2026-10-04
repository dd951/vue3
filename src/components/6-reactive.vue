<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" name="PersonInfo" setup>
// 导入reactive函数
import { reactive } from 'vue';

// 数据
let person = reactive({ name: '张三', age: 20 });

// 方法
function changeName() {
    person.name = 'zhangsan';
}

function changeAge() {
    person.age += 1;
}

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}

button {
    margin: 0 5px;
}
</style>