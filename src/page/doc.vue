<!--
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2024-08-17 14:52:49
-->
<script setup>
import { assignTextAsId } from '../script/directory.js'
import { marked } from 'marked';
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, nextTick, inject } from 'vue';
// @ts-ignore
import xjieSidebarCopy from '../components/xjie-sidebar-copy.vue'
import rendererMD from '../script/renderer.js';
import { mdRouter } from '../router/md-router.js'

const eventBus = inject('eventBus');
const renderedMarkdown = ref('');

const fileContent = ref('');

// 从给定的对象中获取指定键的值。如果该键在对象中不存在，则返回一个默认值。
function getObjectValue(obj, key, defaultValue = undefined) {
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : defaultValue;
}

const readFile = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status}`);
    }
    const text = await response.text();
    fileContent.value = text;
  } catch (error) {
    console.error('Error reading file:', error);
  }
};
function setPageTitle(pageTitle) {
  document.title = pageTitle;
}
onMounted( async() => {
    const route = useRoute()
    const userId = route.query.id
    const userFile = route.query.file
    const filePath = `/mddoc/${userId ? `${userId}/` : ''}${userFile ? `${userFile}` : "index"}.md`;
    console.log(filePath)
    let docTitile = mdRouter[userId][userFile || "index"]['title']
    setPageTitle(docTitile)
    await readFile(filePath);
    const dom = document.getElementById('xjie-content');
    if (!dom) return;
    dom.innerHTML = marked.parse(fileContent.value, { renderer: rendererMD })
    assignTextAsId(dom, 'directory');
    eventBus.dispatchEvent(new Event('kx-doc-loaded'));
})

</script>

<template>
    <div class="page-body">
        <xjieSidebarCopy />
        <main id="main">
            <div id="xjie-content" class="content">
                <div id="mdcontent"></div>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>