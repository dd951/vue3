<template>
    <div class="Sun">
        <h2>Sun</h2>
        <h3>计数器：{{ count }}</h3>
        <button @click="increment">计数器加1</button>
        <hr>
        <img v-for="item in imgs" :src="item" alt="找不到图片">
        <br>
        <button @click="addImg">添加图片</button>
    </div>
</template>

<script lang='ts' setup name='Sun'>
    import useImg from '../hooks/useImg.ts';
    import useCount from '../hooks/useCount.ts';
    // 调用函数useImg()，函数最终直接结束会返回一个对象，以下是对象解构语法。
    const { imgs, addImg } = useImg();
    const { count, increment } = useCount();
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }

    /* 图片宽度 */
    img {
        width: 150px;
        margin: 0 5px;
    }
</style>