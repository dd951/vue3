<!-- 
 如何停止监视，请看代码：比如计数器达到 10 的时候停止监视。
 注意：监视器的返回值就是一个专门用来停止监视的函数：无参数无返回值。
-->

<template>
    <div>
        <h2>count = {{ count }}</h2>
        <button @click="addOne">计数器加1</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref, watch } from 'vue';

    let count = ref(0);

    const addOne = () => {
        count.value++;
    };

    // watch() 函数的返回值是一个函数，通过调用这个函数可以停止监视。
    const stopWatch = watch(count, (newValue, oldValue) => {
        console.log(`count changed from ${oldValue} to ${newValue}`);
        if (newValue >= 10) {
            console.log('count reached 10, stopping watch');
            stopWatch(); // 调用停止监视函数来停止监视。
        }    
    });
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>