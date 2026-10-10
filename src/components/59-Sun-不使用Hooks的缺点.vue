<!-- 
不使用Hooks的缺点

虽然功能实现了，但代码的编写风格不太好：以上代码更像选项式 API 的风格，不太符合组合式 API 风格，
因为当前的风格是：数据中融合了不同功能的数据，方法中融合了不同功能的方法。
组合式 API 强调的是：把单独一个功能相关的 数据+方法 打包放一起。这个时候就
需要使用到 Hooks（组合式函数）。 
-->
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
    import { reactive, ref } from 'vue';
    import axios from 'axios';

    // 数据
    let count = ref(0);

    let imgs = reactive(['https://img.btstu.cn/api/images/5a4ca29ea74cd.jpg']);

    // 方法
    function increment(){
        count.value++;
    }

    async function addImg(){
        try{
            let response = await axios.get('https://dog.ceo/api/breeds/image/random');
            imgs.push(response.data.message);
        }catch(error){
            alert(error);
        }
    }
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