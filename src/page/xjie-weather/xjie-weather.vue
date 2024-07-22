<script setup>
import codeRenderer from '../../components/code-renderer.vue'
import { assignTextAsId } from '../../script/directory.js'
import { onMounted } from 'vue';

onMounted(() => {
    const dom = document.getElementById('xjie-content');
    if (!dom) return;
    assignTextAsId(dom, 'directory');
});
</script>

<template>
<div class="xjie-weather-icon">
  <img src="../../assets/AwajieLogo.svg" alt="awajie-logo" />
  <img src="../../assets/nonebot.png" alt="nonebot-logo" />
</div>
<h1 class="title">nonebot-plugin-xjie-weather</h1>
<div class="page-body">
  <xjie-sidebar/>
  <main id="main" class="xjie-weather">
    <div id="xjie-content" class="content">
      <p class="ac-center">_✨一个 NoneBot 天气插件✨_</p>
      <p class="ac-center">
        <img src="https://img.shields.io/badge/python-3.8+-blue.svg" alt="python">
        <img src="https://img.shields.io/pypi/v/nonebot-plugin-xjie-weather?logo=python&logoColor=edb641" alt="pypi">
        <img alt="Static Badge" src="https://img.shields.io/badge/awajie-a?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAuMzYgNDA0Ljc3Ij48ZGVmcz48c3R5bGU%2BLmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye3N0cm9rZTojMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30uY2xzLTN7ZmlsbDojZGI1NjViO308L3N0eWxlPjwvZGVmcz48ZyBpZD0i5Zu%2B5bGCXzMiIGRhdGEtbmFtZT0i5Zu%2B5bGCIDMiPjxwYXRoIGQ9Ik0yOC4zNS4yNkgxOTMuNjhhMTIsMTIsMCwwLDEsMTIsMTJWNDQuOTVhMTIsMTIsMCwwLDEtMTIsMTJIMTJhMTIsMTIsMCwwLDEtMTItMTJWMjguNkEyOC4zNSwyOC4zNSwwLDAsMSwyOC4zNS4yNloiLz48cGF0aCBkPSJNMzg1LjQxLDBoMTYuMzVhMjguMzUsMjguMzUsMCwwLDEsMjguMzUsMjguMzVWMTE0YTEyLDEyLDAsMCwxLTEyLDEySDM4NS40MWExMiwxMiwwLDAsMS0xMi0xMlYxMkExMiwxMiwwLDAsMSwzODUuNDEsMFoiLz48cGF0aCBkPSJNMzI4LjM2LDM0Ni43NWg5MGExMiwxMiwwLDAsMSwxMiwxMnYxNi42NUEyOC4zNSwyOC4zNSwwLDAsMSw0MDIsNDAzLjc1SDMyOC4zNmExMiwxMiwwLDAsMS0xMi0xMnYtMzNBMTIsMTIsMCwwLDEsMzI4LjM2LDM0Ni43NVoiLz48cGF0aCBkPSJNMTIsMzQ3LjMxaDk4LjIzYTEyLDEyLDAsMCwxLDEyLDEyVjM5MmExMiwxMiwwLDAsMS0xMiwxMkgyOC4zNUEyOC4zNSwyOC4zNSwwLDAsMSwwLDM3NS42NlYzNTkuMzFhMTIsMTIsMCwwLDEsMTItMTJaIi8%2BPHJlY3QgeD0iMTQ2Ljk4IiB5PSIxMjYiIHdpZHRoPSI1Ni42OSIgaGVpZ2h0PSIxMzcuODciIHJ4PSIxMiIvPjxwYXRoIGQ9Ik0yNDQuNDMsMjc5LjQzaC00MS4ybC0uNDEsMC0uNCwwSDgzLjY0YTEyLDEyLDAsMCwwLTEyLDEydjMyLjY5YTEyLDEyLDAsMCwwLDEyLDEySDI0NC40M2ExMiwxMiwwLDAsMCwxMi0xMlYyOTEuNDNBMTIsMTIsMCwwLDAsMjQ0LjQzLDI3OS40M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MS42NCAtNzIuMjUpIi8%2BPHBhdGggZD0iTTIwMy4yMywyNzkuNDNoLS44MWwuNCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxLjY0IC03Mi4yNSkiLz48cGF0aCBkPSJNMjE4LjYyLDI2MC4wNXYzLjQ3czAsLjA4LDAsLjEyYTE1LjgxLDE1LjgxLDAsMCwxLTE1LjgxLDE1LjgxbC0uNTYsMGgtMy42MXYxOS40MUgyNDJWMjYwLjA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxLjY0IC03Mi4yNSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMDMuNjMsMjc5LjQzdjBsLS40LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzEuNjQgLTcyLjI1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIxOC42MiwyNjMuNzJjMCwuMDgsMCwuMTUsMCwuMjNoMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MS42NCAtNzIuMjUpIi8%2BPHJlY3QgeD0iMzI1LjY3IiB3aWR0aD0iNzYuMDkiIGhlaWdodD0iNTYuNjkiIHJ4PSIxMiIvPjxyZWN0IHg9IjAuNDQiIHk9IjIyLjcyIiB3aWR0aD0iNTYuNjkiIGhlaWdodD0iNTcuNTgiIHJ4PSIxMiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMzcyLjg2IiB5PSIyODUuMjUiIHdpZHRoPSI1NyIgaGVpZ2h0PSIxMDEiIHJ4PSIxMiIvPjwvZz48ZyBpZD0i5Zu%2B5bGCXzQiIGRhdGEtbmFtZT0i5Zu%2B5bGCIDQiPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iMjY3LjY5IiBjeT0iNDAuMTUiIHI9IjQwLjE1Ii8%2BPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIyMzYuMzYiIHk9IjE1MC43NSIgd2lkdGg9IjcxLjQ4IiBoZWlnaHQ9IjE3OC4yNSIgcng9IjEyIi8%2BPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIyMTYuMzYiIHk9IjEyNiIgd2lkdGg9IjkxLjQ4IiBoZWlnaHQ9IjQ5LjUiIHJ4PSIxMiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI2MC4yNSwzNTYuNUgyMTUuOTRhMTIsMTIsMCwwLDAtMTIsMTJ2MzMuMTVsLjI4LDIuNjdhMTIuMDYsMTIuMDYsMCwwLDAsMTEuNzIsOS40M2g0NC4zMWExMiwxMiwwLDAsMCwxMi0xMlYzNjguNUExMiwxMiwwLDAsMCwyNjAuMjUsMzU2LjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzEuNjQgLTcyLjI1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIwMy45NCw0MDEuNzVhMTIuMTIsMTIuMTIsMCwwLDAsLjI4LDIuNTdsLS4yOC0yLjY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxLjY0IC03Mi4yNSkiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMDcuOTIsMzg4LjUyYTE3LjI2LDE3LjI2LDAsMCwxLC4xNywyLjI5LDE4LDE4LDAsMCwxLTM2LjA5LDAsMTkuMTQsMTkuMTQsMCwwLDEsLjE2LTIuMjlIMjAzLjk0djEzLjEzbC42LDUuNThDMjEzLjIyLDQ0Ni45MiwyNDguODYsNDc3LDI5MSw0NzdjNDguNTUsMCw4OC40OS0zOS45NCw4OC40OS04OC40OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MS42NCAtNzIuMjUpIi8%2BPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIxOTAuNzIiIHk9IjMwOC4zOCIgd2lkdGg9IjkuODkiIGhlaWdodD0iMjMuNDkiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjIzNi4zNiIgeT0iMzA1LjM4IiB3aWR0aD0iNC45IiBoZWlnaHQ9IjIxLjc5Ii8%2BPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMzUuNzEiIHk9IjMxMy45NiIgd2lkdGg9IjAuNjUiIGhlaWdodD0iMy43Ii8%2BPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzE4LjEsMjQwLjg5SDI5OC44OHY2LjhsLjU3LjA3aDBhOC44OSw4Ljg5LDAsMCwxLDguNTYsOC44OWMwLC4xNCwwLC4yOCwwLC40MnYyLjMzSDMxOC4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxLjY0IC03Mi4yNSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMDgsMjU2LjIxaDBjMCwuMDcsMCwuMTMsMCwuMTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzEuNjQgLTcyLjI1KSIvPjwvZz48L3N2Zz4%3D&labelColor=fbf2e3&color=%23161823">
      </p>
      <section>
        <h1 directory class="hr">安装</h1>
        <ul class="ul">
          <li>使用 nb-cli</li>
        </ul>
        <code-renderer wat = "xjie-weather-1">
          <ul class="ul-li-sstyle-none">
            <li>nb plugin install nonebot-plugin-xjie-weather</li>
          </ul>
        </code-renderer>
        <ul class="ul">
          <li>使用 pip</li>
        </ul>
        <code-renderer wat = "xjie-weather-2">
          <ul class="ul-li-sstyle-none">
            <li>pip install nonebot-plugin-xjie-weather</li>
          </ul>
        </code-renderer>
      </section>
      <section>
        <h1 directory class="hr">支持</h1>
        <table class="table-a">
          <thead>
          <tr>
            <td>API</td>
            <td>是否支持</td>
            <td>调用天气预报</td>
            <td>城市编码获取</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>高德天气</td>
            <td>支持✅</td>
            <td>300000次/天</td>
            <td>5000次/天</td>
          </tr>
          <tr>
            <td>和风天气</td>
            <td>支持✅</td>
            <td>1000次/天</td>
            <td>和前面次数共用</td>
          </tr>
          <tr>
            <td>Visual Crossing</td>
            <td>未完成❌</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>心知天气</td>
            <td>未完成❌</td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h1 directory class="hr">BUG反馈</h1>
        <ul class="ul">
          <li>提<a href="https://github.com/ajdgg/nonebot-plugin-xjie-weather/issues"><span class="stress">issues</span></a></li>
          <li>发送bug到邮箱<span class="stress">awesomeajie@qq.com</span></li>
        </ul>
      </section>
      <section>
        <h1 directory class="hr">配置</h1>
        <h2 directory-2>一</h2>
        <ul class="ul">
          <li>使用<span class="stress">st</span>命令交互式设置key</li>
        </ul>
        <code-renderer wat = "xjie-weather-3">
          <ul class="ul-li-sstyle-none">
            <li>高德<span class="gap-10px"></span>AMAP_KEY</li>
            <li>和风天气<span class="gap-10px"></span>QWEATHER_KEY</li>
          </ul>
        </code-renderer>
        <ul class="ul">
          <li>如果有多个key想使用哪个或者在一个平台的调用次数用完后可以进行切换</li>
        </ul>
        <code-renderer wat = "xjie-weather-4">
          <ul class="ul-li-sstyle-none">
            <li>default_api<span class="gap-10px"></span>优先使用的平台 </li>
            <li>手动填入的话平台名为上面的key名</li>
          </ul>
        </code-renderer>
        <img class="img-content" src="../../assets/JPEG/pz-bot-key.jpg" alt="设置key">
      </section>
      <section>
        <h1 directory class="hr">插件返回的天气预报图片效果</h1>
        <h2 directory-2>高德</h2>
        <p>高德地图返回的天气数据种类不多但对于只看个天气预报而已的完全够</p>
        <p>毕竟高德调用的次数挺多的</p>
        <img class="img-content" src="../../assets/JPEG/gd-4.jpg">
        <h2 directory-2>和风天气</h2>
        <p>好看</p>
        <img class="img-content" src="../../assets/JPEG/hf-1.jpg" />
      </section>
      <section>
        <h1 directory class="hr">平台key获取</h1>
        <p><router-link to="/xjie-weather/amap">📦 高德</router-link></p>
      </section>
    </div>
  </main>
</div>
</template>

<style scoped>
</style>