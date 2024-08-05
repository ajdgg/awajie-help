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
                        <div directory>2024-8-2</div>
                        <ul>
                            <li>更改插件的模式储存方式,实现持续存储</li>
                        </ul>
                    </li>
                    <li>
                        <div directory>2024-05-26</div>
                        <ul>
                            <li>更新模式切换判断</li>
                            <li>└ 缺点：插件在自己或bot重启后会默认关闭连续模式</li>
                        </ul>
                    </li>
                    <li>
                        <div directory>2024-05-19</div>
                        <ul>
                            <li>添加是否进行连续回答模式</li>
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