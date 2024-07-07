<script setup>
import { ref } from 'vue'
let textshow = ref(false);

const props = defineProps({
  wat: String,
})

const watid = ref(props.wat);

const copyContent = async () => {
  const parentElement = document.querySelector("#" + watid.value);
  let textToCopy = '';

  function getTextFromNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent.trim();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      let text = '';
      Array.from(node.childNodes).forEach(child => {
        text += getTextFromNode(child) + '\n';
      });
      return text.trim();
    }
    return '';
  }

  Array.from(parentElement.childNodes).forEach(node => {
    textToCopy += getTextFromNode(node) + '\n';
  });

  textToCopy = textToCopy.slice(0, -1);

  try {
    await navigator.clipboard.writeText(textToCopy);
    textshow.value = true;
    setTimeout(() => {
      textshow.value = false;
    }, 3000);
  } catch (err) {
    console.error('无法复制文本: ', err);
  }
};
</script>

<template>
<div id="parent-f">
  <div :id="watid">
    <slot></slot>
  </div>
  <span id="parent-s" @click="copyContent"></span>
  <div v-show="textshow" id="parent-c">已复制</div>
</div>
</template>

<style scoped>
#parent-f {
  position: relative;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
}
#parent-s {
  width: 15px;
  height: 15px;
  border: 2px solid #ccc;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
}
#parent-c {
  position: absolute;
  top: 5px;
  right: 40px;
  padding: 2px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
</style>