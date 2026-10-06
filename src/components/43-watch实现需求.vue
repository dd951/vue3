<!-- 
watch可以看做是精确监视，watchEffect可以做到模糊监视。 

watch和 watchEffect对比：
1. 都能监听响应式数据的变化，监听数据变化的方式不同。
2. watch要明确指出监视的数据。
3. watchEffect：不需要明确指出监视的数据（函数中用到哪些属性，它就会自动监视这些属性）

需求：监视一个学生的语文和数学成绩，如果语文和数学成绩都大于等于 60 分，输出及格，
都大于等于 80 分，输出良好，都大于等于 90 分，输出优秀。
另外，任何一科的学习成绩不能超过 100 分。
-->

<template>
    <div class="myClass">
        <h2>语文成绩：{{ chineseScores }}分</h2>
        <h2>数学成绩：{{ mathScores }}分</h2>
        <div>
            <button @click="changeChineseScores">修改语文成绩</button>
            <button @click="changeMathScores">修改数学成绩</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { ref, watch } from 'vue';

    // 数据
    let chineseScores = ref(0);
    let mathScores = ref(0);

    // 方法
    function changeChineseScores() {
        if (chineseScores.value < 100) {
            chineseScores.value += 10;
        }
    }
    function changeMathScores() {
        if (mathScores.value < 100) {
            mathScores.value += 10;
        }
    }

    // 监视
    watch([chineseScores, mathScores], (val) => {
        // console.log(val);
        let [chScore, maScore] = val;
        if (chScore >= 90 && maScore >= 90) {
            console.log('成绩：优秀');
        } else if (chScore >= 80 && maScore >= 80) {
            console.log('成绩：良好');
        } else if (chScore >= 60 && maScore >= 60) {
            console.log('成绩：及格');
        } else {
            console.log('成绩：不及格');
        }
    }, { immediate: true });

</script>

<style scoped>
    .myClass {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }

    button {
        margin: 5px 0;
    }
</style>