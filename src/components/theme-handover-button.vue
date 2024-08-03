<script setup>
import { ref, onMounted } from 'vue'

const buttonImg = ref(true)

let theme = localStorage.getItem("theme");


onMounted(() => {
    if (theme != null) {
        const newTheme = theme == "true" ? true : false;
        if (newTheme != buttonImg.value) { 
            click()
            buttonImg.value = newTheme 
        }
    }
})

function click() {
    const buttonimg = document.getElementById('button-img')
    if (buttonImg.value) {
        buttonimg.style.transform = "translate(19px)"
        document.body.setAttribute('data-theme', "dark");
        localStorage.setItem('theme', false);
        buttonImg.value = false
    } else {
        buttonimg.style.transform = "translate(0px)"
        document.body.setAttribute('data-theme', "light");
        localStorage.setItem('theme', true);
        buttonImg.value = true
    }
}

</script>

<template>
    <button @click.prevent="click" class="labm-button">
        <div id="button-img"></div>
    </button>
</template>

<style scoped>
.labm-button {
    width: 40px;
    height: 22px;
    background-color: red;
    border-radius: 20px;
    position: relative;
}
.labm-button div {
    width: 18px;
    height: 18px;
    background-color: blue;
    border-radius: 50%;
    transform: translate(0px);
    transition: background-color .25s,transform .25s;
    position: absolute;
    top: 2px;
    left: 1px;
}
</style>