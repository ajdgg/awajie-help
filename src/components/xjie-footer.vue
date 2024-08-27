<!--
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2024-07-22 21:44:47
-->
<script setup>
import { onMounted, ref } from 'vue';
let t = new Date();

t = ref("已经运行了00天00小时00分钟00秒")

function Time() {
    let nowTimeq = new Date();
    let setTimeq = new Date('2024/7/7');
    let elapsedAllSecondsq = Math.floor((nowTimeq.getTime() - setTimeq.getTime()) / 1000);
    let elapsedDaysq = Math.floor(elapsedAllSecondsq / (60 * 60 * 24));
    let elapsedHoursq = Math.floor(elapsedAllSecondsq / (60 * 60) % 24);
    let elapsedMinutesq = Math.floor(elapsedAllSecondsq / 60 % 60);
    let elapsedSecondsq = Math.floor(elapsedAllSecondsq % 60);
    t.value = `已经运行了${elapsedDaysq}天${elapsedHoursq}小时${elapsedMinutesq}分钟${elapsedSecondsq}秒`
}

onMounted(() => {
    setInterval(function () {
        Time();
    }, 1000)
})

</script>

<template>
    <footer id="footer" class="footer" ref="target">
        <div id="time">{{ t }}</div>
        <ul class="flex li-style-none flex-jc-center footer-ul-1 flex-wrap">
            <li>BUG反馈：awesomeajie@qq.com</li>
            <li>Copyright &copy; 2024 AwAjie</li>
            <li><a href="http://beian.miit.gov.cn/">闽ICP备2024064560号-1</a></li>
            <li><a class="flex" href="https://beian.mps.gov.cn/#/query/webSearch"><span class="beian"></span>闽公网安备35050502100032号</a></li>
        </ul>
    </footer>
</template>

<style scoped>
.footer {
    width: 100%;
    margin-top: 150px;
    padding: 20px 0;
    text-align: center;
    background-color: var(--footer-bgcolor);
}
.footer-ul-1 li {
    margin: 0 10px;
}
.beian {
    display: block;
    width: 15px;
    margin: 0 5px;
    background: url(../assets/beian.png) no-repeat center center / 100%;
}
</style>