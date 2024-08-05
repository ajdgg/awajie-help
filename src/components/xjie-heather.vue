<script setup>
import themeHandoverButton from "../components/theme-handover-button.vue";
import { onMounted, onUnmounted, ref, watchEffect, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import logoA from '../assets/AwajieLogo.svg'
import logoB from '../assets/AwajieLogo-dark.svg'

const eventBus = inject('eventBus');
const activeRoute = ref(null);
const hamburger = ref(null);
const navMenu = ref(null);
const navLinks = ref([]);

const route = useRoute();

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

    initLogoSrc();
    eventBus.addEventListener('theme-switched', onThemeSwitched);
});

onUnmounted(() => {
    hamburger.value.removeEventListener("click", toggleMenu);

    navLinks.value.forEach((link) => {
        link.removeEventListener("click", closeMenu);
    });

    window.removeEventListener("scroll", handleScroll);

    eventBus.removeEventListener('theme-switched', onThemeSwitched);
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

const logoSrc = ref('');
function initLogoSrc() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    logoSrc.value = isDark ? logoB : logoA;
}
function onThemeSwitched() {
    initLogoSrc();
}
</script>

<template>
    <header class="header">
        <div class="read_pro">
            <div class="read_pro_inner" id="read_pro_inner"></div>
        </div>
        <nav class="navbar">
            <div class="navbar-one">
                <div class="header-order1 hover-logo-bgcolor">
                    <router-link to="/" class="nav-link">
                        <img :src="logoSrc" alt=""  width="30px" height="30px" />
                    </router-link>
                </div>
        <!-- #:跳转链接 -->
                <ul class="nav-menu">
                    <li class="nav-item nav-item-layout">
                        <router-link to="/" class="nav-link">首页</router-link>
                    </li>
                    <li class="nav-item nav-item-layout">
                        <themeHandoverButton></themeHandoverButton>
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
    background-color: var(--header-Progress-bar-bgcolor);
}
.nav-menu li {
    list-style: none;
    display: flex;
}
.header {
    z-index: 9999;
    border-bottom: 1px solid var(--navbor-border-bottom-bgcolor);
    /* border-bottom: 1px solid #e2e8f0; */
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 1px 1px var(--navbor-border-bottom-bgcolor);
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    background-color: var(--navbar-bgcolor);
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
    background-color: var(--navbar-icon-bgcolor);
}
.nav-menu {
    display: flex;
    justify-content: space-between;
}
.nav-item {
    margin-left: 2rem;
}
.nav-item-layout {
    display: flex;
}
.nav-link {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: var(--nav-link-color);
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
        background-color: var(--nav-menu-bgcolor);
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