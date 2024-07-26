<script setup>
</script>

<template>
<div class="page-body">
  <main id="index-main">
    <div class="h1">帮助文档</div>
    <div id="index-container" class="container">
      <router-link to="/xjie-calc24">
        <div class="nonebot-plugin">
          <span>nonebot-plugin-calc24</span>
        </div>
      </router-link>
      <router-link to="/xjie-weather">
        <div class="nonebot-plugin">
          <span>nonebot-plugin-xjie-weather</span>
        </div>
      </router-link>
    </div>
  </main>
</div>

</template>

<style>
#index-main {
  flex: auto;
  padding: 10px;
  min-height: 500px;
  margin-bottom: 50px;
  margin: 150px 30px 0;
  border-radius: 10px;
  background-color: rgba(255, 245, 245, 0.5);
}
.container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;

}
.nonebot-plugin {
  padding: 10px;
  margin: 10px 5px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  background-color: rgba(255, 245, 245, 0.5);
}
</style>