<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<!--  <h1>{{ msg }}</h1>-->

<!--  <div class="card">-->
<!--    <button type="button" @click="count++">count is {{ count }}</button>-->
<!--    <p>-->
<!--      Edit-->
<!--      <code>components/HelloWorld.vue</code> to test HMR-->
<!--    </p>-->
<!--  </div>-->

<!--  <p>-->
<!--    Check out-->
<!--    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"-->
<!--      >create-vue</a-->
<!--    >, the official Vue + Vite starter-->
<!--  </p>-->
<!--  <p>-->
<!--    Install-->
<!--    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>-->
<!--    in your IDE for a better DX-->
<!--  </p>-->
<!--  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
  <div id="xjie-content" class="content">
    <p class="ac-center">_✨一个 NoneBot 天气插件✨_</p>
    <p>
      <h1 id="配置" class="hr">配置</h1>
      <h2>一</h2>
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
    </p>
    <p>
      <h1 id="插件返回的天气预报图片效果" class="hr">插件返回的天气预报图片效果</h1>
      <h2>高德</h2>
      <p>高德地图返回的天气数据种类不多但对于只看个天气预报而已的完全够</p>
      <p>毕竟高德调用的次数挺多的</p>
      <img class="img-content" src="../../assets/JPEG/gd-4.jpg">
      <h2>和风天气</h2>
      <p>好看</p>
      <img class="img-content" src="../../assets/JPEG/hf-1.jpg" />
    </p>
    <p>
      <h1 id="平台key获取" class="hr">平台key获取</h1>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
