<script setup>
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const activeRoute = ref(null);
const hamburger = ref(null);
const navMenu = ref(null);
const navLinks = ref([]);

const route = useRoute();
const router = useRouter();

activeRoute.value = route.path;

watchEffect(() => {
    activeRoute.value = route.path;
});

function toggleMenu() {
    hamburger.value.classList.toggle("active");
    navMenu.value.classList.toggle("active");
}

function closeMenu() {
    hamburger.value.classList.remove("active");
    navMenu.value.classList.remove("active");
}

onMounted(() => {
    hamburger.value = document.querySelector(".hamburger");
    navMenu.value = document.querySelector(".nav-menu");
    navLinks.value = document.querySelectorAll(".nav-link");

    hamburger.value.addEventListener("click", toggleMenu);

    navLinks.value.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    hamburger.value.removeEventListener("click", toggleMenu);

    navLinks.value.forEach((link) => {
        link.removeEventListener("click", closeMenu);
    });

    window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const progress = document.getElementById("read_pro_inner");
    if (progress) {
        progress.style.width = ((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2) + "%";
    }
}
</script>

<template>
    <header class="header">
        <div class="read_pro">
            <div class="read_pro_inner" id="read_pro_inner"></div>
        </div>
        <nav class="navbar">
            <div class="navbar-one">
                <div class="header-order1 hover-EDEDED">
                    <router-link to="/" class="nav-link">
                        <img src="../assets/AwajieLogo.svg" alt=""  width="30px" height="30px" />
                    </router-link>
                </div>
        <!-- #:跳转链接 -->
                <ul class="nav-menu">
                    <li class="nav-item nav-item-layout">
                        <!-- <router-link to="/" class="nav-link">首页</router-link> -->
                    </li>
                </ul>
        <!-- 更多按钮 -->
            <div class="hamburger header-order2">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
        <div style="width: 25px">
        </div>
        </nav>
    </header>
</template>

<style scoped>
.read_pro {
    width: 100%;
    height: 3px;
    background-color: #DDD;
}
.read_pro_inner {
    content: '';
    height: 100%;
    background-color: #9fe6fa;
}
.nav-menu li {
    list-style: none;
    display: flex;
}
.header {
    z-index: 9999;
    border-bottom: 1px solid #e2e8f0;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 1px 1px #ececec;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    background-color: #fff;
}
.navbar-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding-right: 20px;
}
.hamburger {
    display: none;
}
.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
}
.nav-menu {
    display: flex;
    justify-content: space-between;
}
.nav-item {
    margin-left: 5rem;
}
.nav-item-layout {
    display: flex;
}
.nav-link {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #475569;
}
.nav-link:hover {
    color: #ccc;
}
.nav-menu.active {
    left: 0;
}
.header-order1 {
    padding: 5px;
    border-radius: 5px;
    transition: all 0.5s;
}
@media only screen and (max-width: 1200px) {
    .hamburger {
        display: block;
        cursor: pointer;
        width: 50px;
    }
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 60px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        transition: all 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }
    .nav-item {
        margin: 1rem;
    }
    .navbar-one {
        padding: 0;
    }
    .header-order1 {
        display: none;
        text-align: center;
        order: 2;
        flex: 1;
    }
}
.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}
.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
</style>