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
                        <div directory>24-8-2</div>
                        <ul>
                            <li>现在可以通过在<span class="stress">.env.dev</span>中设置管理员和平台key</li>
                            <li>修复了和风天气请求部分将错误数据进行请求的bug</li>
                        </ul>
                    </li>
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