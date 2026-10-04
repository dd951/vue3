<template>
    <!-- 通过事件实现双向数据绑定-手动实现 -->
    <div>
        <!-- @input 表示当发生input事件的时候执行：inputValue = ($event.target as HTMLInputElement).value -->
        <!-- $event 表示当前发生的事件 -->
        <!-- $event.target 表示当前发生事件的目标元素，as HTMLInputElement是TypeScript中的断言机制，断言类型之后可以解决编译报错问题 -->
        <!--@input="inputValue = ($event.target as HTMLInputElement).value" 表示当发生input事件的时候，将文本框中value赋值给数据inputValue变量 -->
    <input type="text" :value="inputValue" @input="inputValue = ($event.target  as HTMLInputElement).value">

        <div>您输入的用户名为：{{ inputValue }}</div>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
import { ref } from 'vue';

const inputValue = ref('jackson');
</script>

<style scoped></style>