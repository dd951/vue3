<!-- 
作用域插槽：
数据在子组件当中，父组件在生成结构时需要使用子组件中的数据，此时需要使用作用域插槽。 
-->
<template>
    <div class="parent">
        <h1>父组件</h1>
        <div class="content">
            <News>
                <!-- params是子组件给传递过来的对象，对象中包含 newsList、x、y等数据，params名字不是固定的，可以换名字 -->
                <template v-slot:s="params">
                    <ul>
                        <li v-for="news in params.newsList" :key="news.id">
                            {{ news.content }}
                        </li>
                    </ul>
                </template>
            </News>
            <News>
                <template v-slot:s="aaa">
                    <ol>
                        <li v-for="news in aaa.newsList" :key="news.id">
                            {{ news.content }}
                        </li>
                    </ol>
                </template>
            </News>
            <News>
                <template v-slot:s="params">
                    <h5 v-for="news in params.newsList" :key="news.id">
                        {{ news.content }}
                    </h5>
                </template>
            </News>
        </div>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import News from './News.vue';
</script>

<style scoped>
    .parent {
        border-radius: 10px;
        padding: 10px;
        box-shadow: 10px;
        background-color: rgb(219, 240, 248);
        width: 80%;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
    }
</style>