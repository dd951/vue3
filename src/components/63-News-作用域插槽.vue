<template>
    <div class="news">
        <h2>今日热点新闻</h2>
        <!-- 作用域插槽：给父组件开了一个窗口，让父组件可以访问我的数据。 -->
        <slot :newsList="newsList" x="100" y="200" name="s"></slot>
    </div>
</template>

<script lang='ts' setup name="News">
    import { reactive } from 'vue';

    let newsList = reactive([
        { id: 'news001', content: '澳总理发帖晒图：很荣幸参观中国长城' },
        { id: 'news002', content: '特朗普改口：无意炒掉美联储' },
        { id: 'news003', content: '巴西一11岁女孩拔牙时发现81颗牙齿' },
        { id: 'news004', content: '亚马尔与巴萨正式续约 新赛季将身披10号球衣' },
        { id: 'news005', content: '听孙颖莎说，而不是替她说' }
    ]);
</script>

<style scoped>
    .news {
        width: 400px;
        height: 500px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    h2 {
        background-color: orange;
        text-align: center;
        font-size: 20px;
        font-weight: 800;
    }
</style>