<script setup>
</script>

<template>
<div class="xjie-weather-icon">
  <img src="../../assets/AwajieLogo.svg" alt="awajie-logo" />
  <img src="../../assets/nonebot.png" alt="nonebot-logo" />
</div>
<div class="page-body">
  <xjie-sidebar />
  <main id="main">
    <div id="xjie-content" class="content">
      <section>
        <h1 id="申请key" class="hr">申请key</h1>
        <p>进入<a href="https://lbs.amap.com">高德开发平台 https://lbs.amap.com</a></p>
        <img class="img-content" src="../../assets/JPEG/gd-1.jpg" alt="高德首页" />
        <p>登录或注册账号后进入控制台</p>
        <p>依次点击应用管理 -> 我的应用 -> 右上角创建新应用</p>
        <img class="img-content" src="../../assets/JPEG/gd-2.jpg" alt="高德控制台">
        <p>选择web服务后填写信息即可创建key</p>
        <img class="img-content" src="../../assets/JPEG/gd-3.jpg" alt="获取key">
        <p>创建完成后即可在控制台查看key</p>
      </section>
    </div>
  </main>
</div>
</template>

<style scoped>

</style>