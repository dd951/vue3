import { onMounted, ref } from 'vue';

export default function () {
    // 数据
    let count = ref(0);

    // 方法
    function increment() {
        count.value++;
    }

    // Hooks 中支持生命周期钩子
    // 例如，我要在页面加载完毕后，count 计数器的初始值设置为 10。可以这样修改 useCount.ts这个 Hooks：
    onMounted(() => {
        count.value = 10;
    })
    
    return {count, increment};
}