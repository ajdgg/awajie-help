<script setup>
import { ref, onMounted } from 'vue'
import xjieHeather from './components/xjie-heather.vue';
import xjieFooter from './components/xjie-footer.vue';
import backToTop from './components/back-to-top.vue';

let cacheTitle = ref("")

onMounted(() => {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cacheTitle.value = document.title
      document.title = "|•ω•`)~拜拜"
    } else {
      document.title = cacheTitle.value
    }
  });
})
</script>

<template>
  <xjieHeather />
  <router-view />
  <xjieFooter />
  <backToTop />
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
