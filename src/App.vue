<script setup>
import xjieHeather from './components/xjie-heather.vue';
import xjieFooter from './components/xjie-footer.vue';
</script>

<template>
  <xjieHeather />
  <router-view />
  <xjieFooter />
</template>

<style>
body {
  background-color: var(--body-bgcolor);
  color: var(--font-color);
}
#app {
  display: flex;  
  flex-direction: column;  
  min-height: 100vh;
}
</style>
