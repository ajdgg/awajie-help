<script setup>
import { ref, onMounted } from 'vue'

// let SubassemblyBtn = ref("rotate(-90deg) translateY(100px)")
let isTrue = ref(false)
let isTrueMax = ref(false)
let isFales = ref(true)

onMounted(()=> {
    isTrue.value = window.innerWidth >= 1200 ? true : false;  
    isTrueMax.value = window.innerWidth < 1200 ? true : false;
    window.addEventListener('scroll', ajieshowbtn, true)
})
function ajieshowbtn() {
    let btnscrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    if (btnscrollTop > 150) {
        if (window.innerWidth >= 1200) {
            isTrue.value = true
        } else {
            isTrueMax.value =true
        }
        isFales.value = false
    } else {
        isTrue.value = false
        isTrueMax.value = false
        isFales.value = true
    }
}
function XjieBackTop() {
    var timer = setInterval(function () {
        let osTop =
            document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
            clearInterval(timer)
        }
    }, 30)
}
</script>


<template>
    <div @click="XjieBackTop" class="back-to-top" :class="{ 'btn-true': isTrue, 'btn-fales': isFales, 'btn-true-max': isTrueMax }"></div>
</template>

<style scoped>
.back-to-top {
    width: 100px;
    height: 100px;
    position: fixed;
    top: 70%;
    right: 0;
    transition: all .3s;
    transform: rotate(-90deg);
    background: url(../assets/awajiexj.png) no-repeat center center  / 100% 100%;
}
.btn-true {
    --SubassemblyBtn: rotate(-90deg) translateY(25px)
}
.btn-true-max {
    --SubassemblyBtn: rotate(-90deg) translateY(0px)
}

.btn-fales {
    --SubassemblyBtn: rotate(-90deg) translateY(100px)
}

@media screen and (min-width: 1200px) {
    .back-to-top {
        transform: var(--SubassemblyBtn);
    }
    .back-to-top:hover {
        transform: rotate(-90deg) translateY(0px);
    }
}
@media screen and (max-width: 1199px) {
    .back-to-top {
        transform: var(--SubassemblyBtn);
    }
}
</style>