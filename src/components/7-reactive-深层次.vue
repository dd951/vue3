<template>
    <div>
        <div>{{ obj.a.b.c }}</div>
        <button @click="changeValue">修改</button>
    </div>
</template>

<script lang='ts' setup name="PersonInfo">
import { reactive } from 'vue';

// 被 reactive 函数包裹的对象被称为响应式对象，并且这个响应式对象深层次的属性仍然支持响应式的。
let obj = reactive({
    a: {
        b: {
            c: 100
        }
    }
});

// 也可以使用箭头函数。将函数赋给一个变量，这个变量就代表这个函数。最终也会自动返回暴露给模板。
const changeValue = () => {
    obj.a.b.c = 200;
}
</script>