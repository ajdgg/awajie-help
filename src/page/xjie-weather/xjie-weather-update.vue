<script setup>
import { assignTextAsId } from '../../script/directory.js'
import { onMounted } from 'vue';

onMounted(() => {
    const dom = document.getElementById('xjie-content');
    if (!dom) return;
    assignTextAsId(dom, 'directory');
});
</script>

<template>
    <div class="page-body">
        <xjie-sidebar />
        <main id="main">
            <div id="xjie-content" class="content">
                <ul id="ul">
                    <li>
                        <div directory>24-7-11</div>
                        <ul>
                            <li>完成对插件设置部分进行重构</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
    </div>

</template>

<style>
#ul, #ul ul {
    padding-left: 20px;
}
</style>