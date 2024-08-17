<script setup>
import { assignTextAsId } from '../script/directory.js'
import { marked } from 'marked';
import { ref, watch, onMounted, nextTick, inject } from 'vue';
import rendererMD from '../script/renderer.js';

const eventBus = inject('eventBus');
const markdownContent = ref('# Hello, Markdown!\n\nThis is a **bold** and *italic* text.');
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
onMounted( async() => {
    // const filePath = `/mddoc/${props.filename}`;
    const filePath = `/mddoc/index.md`;
    await readFile(filePath);
    const dom = document.getElementById('xjie-content');
    if (!dom) return;
    dom.innerHTML = marked.parse(fileContent.value, { renderer: rendererMD })
    assignTextAsId(dom, 'directory');
    eventBus.dispatchEvent(new Event('kx-doc-loaded'));
})

const props = defineProps({
  filename: String,
});

</script>

<template>
    <div class="page-body">
        <xjie-sidebar />
        <main id="main">
            <div id="xjie-content" class="content">
                <div v-html="renderedMarkdown" id="mdcontent"></div>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>