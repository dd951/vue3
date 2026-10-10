<!-- 
具名插槽：有名字的插槽，这样在插入内容的时候比较灵活。可以指定某段内容插入到某个指定的位置。 
-->
<template>
    <div class="parent">
        <h1>父组件</h1>
        <div class="content">
            <!-- 将整个Category标签中的所有内容全部放到 s 插槽中，不够灵活 -->
            <Category title="今日新闻热点" v-slot:s>
                <ul>
                    <li v-for="news in newsList" :key="news.id">
                        {{ news.content }}
                    </li>
                </ul>
            </Category>
            <Category title="今日美食推荐">
                <!-- 将Category标签中的部分内容放到 s 插槽中，比较灵活 -->
                <template v-slot:s>
                    <img :src="imgUrl" alt="美食图片加载失败">
                </template>
            </Category>
            <Category title="今日影视推荐">
                <!-- 插槽的简写形式 -->
                <template #s>
                    <video :src="movieUrl" controls></video>
                </template>
            </Category>
        </div>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import Category from './Category.vue';

    let newsList = [
        { id: 'news001', content: '澳总理发帖晒图：很荣幸参观中国长城' },
        { id: 'news002', content: '特朗普改口：无意炒掉美联储' },
        { id: 'news003', content: '巴西一11岁女孩拔牙时发现81颗牙齿' },
        { id: 'news004', content: '亚马尔与巴萨正式续约 新赛季将身披10号球衣' },
        { id: 'news005', content: '听孙颖莎说，而不是替她说' }
    ];

    let imgUrl = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd';

    let movieUrl = 'https://images-assets.nasa.gov/video/One%20Small%20Step/One%20Small%20Step~orig.mp4';
</script>

<style scoped>
    .parent {
        border-radius: 10px;
        padding: 10px;
        box-shadow: 10px;
        background-color: rgb(219, 240, 248);
        width: 70%;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
    }

    img,
    video {
        width: 100%;
    }
</style>