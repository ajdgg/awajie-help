<script setup>

</script>

<template>
<main>
  <div>这里也没有</div>
  <div class="container">
    <!-- <router-link to="/calc24">
      <div class="nonebot-plugin">
        <span>nonebot-plugin-calc24</span>
      </div>
    </router-link> -->
    <router-link to="/xjie-weather">
      <div to="/xjie-weather" class="nonebot-plugin">
        <span>nonebot-plugin-xjie-weather</span>
      </div>
    </router-link>
  </div>
</main>
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: rgba(255, 245, 245, 0.5);
  margin: calc(10vh + 150px) 30px 0;
}
.nonebot-plugin {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  background-color: rgba(255, 245, 245, 0.5);
}
</style>