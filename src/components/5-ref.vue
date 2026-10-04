<template>
    <div class="person">
        <!-- 这里不需要加.value，因为底层会自动.value -->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" name="PersonInfo" setup>
import { ref, type Ref } from 'vue';

let name: Ref = ref('张三');
let age = ref(20);
let tel = '13000000000';

function changeName() {
    // 用ref包裹的数据是一个RefImpl对象，操作数据时一定要加.value
    // console.log(name); 
    name.value = 'zhangsan';
}
function changeAge() {
    age.value += 1;
}
function showTel() {
    alert(`手机号：${tel}`);
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