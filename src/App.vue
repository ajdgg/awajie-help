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
  padding-top: 80px;
  background-color: #9fe6fa;
}
</style>
