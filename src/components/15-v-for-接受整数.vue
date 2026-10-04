<template>
    <!-- v-for 也可以接受整数，在这种情况下，它会把模板重复对应次数 -->
    <div>
        <ul>
            <li v-for="n in 10" :key="n"> <!-- 重复10次 从1开始-->
                {{n}}
            </li>
        </ul>
    </div>
</template>