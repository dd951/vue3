<!-- 
也可以安装一个插件，让以上两个 script合并成一个 script 
-->
<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    let name = '张三';
    let tel = '13000000000';
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
</style>