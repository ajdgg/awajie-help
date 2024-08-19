<script setup>
import { assignTextAsId } from '../script/directory.js'
import { marked } from 'marked';
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, nextTick, inject } from 'vue';
import xjieSidebarCopy from '../components/xjie-sidebar copy.vue'
import rendererMD from '../script/renderer.js';
import { mdRouter } from '../router/md-router.js'

const eventBus = inject('eventBus');
const renderedMarkdown = ref('');

const fileContent = ref('');

const readFile = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status}`);
    }
    const text = await response.text();
    // console.log(text);
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
    const filePath = `/mddoc/${userId ? `${userId}/` : ''}${userFile}.md`;
    console.log(filePath)
    let docTitile = mdRouter[userId][userFile]['title']
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