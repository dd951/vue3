import { reactive } from 'vue';
import axios from 'axios';

export default function(){
    // 数据
    let imgs = reactive(['https://img.btstu.cn/api/images/5a4ca29ea74cd.jpg']);

    // 方法
    async function addImg() {
        try {
            let response = await axios.get('https://dog.ceo/api/breeds/image/random');
            imgs.push(response.data.message);
        } catch (error) {
            alert(error);
        }
    }
    return {imgs, addImg};
}