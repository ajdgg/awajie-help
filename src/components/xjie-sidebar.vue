<script setup>
import { onMounted, onBeforeUnmount, ref, inject } from 'vue';
import { debounce } from '../script/debounce.js'

const eventBus = inject('eventBus');
const xjieSidebarHeight = ref(0);
const headings = ref([]);
const headingsh2 = ref({});
const xjieSidebarShow = ref("0");

if (window.innerWidth < 1024) {
  xjieSidebarShow.value = "-100%";
}

const navHeight = 60;

let hashChangeListener = null;

function handleHashChange() {
  const hash = decodeURIComponent(window.location.hash);
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - navHeight,
          behavior: 'smooth'
        });
      }
    }, 0);
  }
}

function checkHashOnLoad() {
  const hash = decodeURIComponent(window.location.hash);
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
  }
}

const updateSidebarHeight = () => {
    const xjieSidebarContent = document.getElementById('xjie-sidebar-content');
    if (xjieSidebarContent) {
    setTimeout(() => {
      const rect = xjieSidebarContent.getBoundingClientRect();
      if (rect) {
        xjieSidebarHeight.value = rect.height;
      }
    }, 0);
  }
};

onMounted(async () => {
  Sidecolumnrecord()
  eventBus.addEventListener('kx-doc-loaded', Sidecolumnrecord);
});
function Sidecolumnrecord() {
  const xjieContent = document.getElementById('xjie-content');
  if (!xjieContent) return;

  const directoryElements = Array.from(xjieContent.querySelectorAll('[directory]'));
  
  let currentSectionId = null;
  let h2sInCurrentSection = [];
  
  directoryElements.forEach(directory => {
    const sectionId = directory.textContent.trim();
    headings.value.push(sectionId);
    headingsh2.value[sectionId] = [];
    currentSectionId = sectionId;

    const h2sInSection = Array.from(directory.parentNode.querySelectorAll('[directory-2]'));
    h2sInSection.forEach(h2 => {
        h2sInCurrentSection.push(h2.textContent.trim());
    });

    headingsh2.value[currentSectionId] = h2sInCurrentSection;
    h2sInCurrentSection = [];
  });

  if (currentSectionId !== null && h2sInCurrentSection.length > 0) {
      headingsh2.value[currentSectionId] = h2sInCurrentSection;
  }

  updateSidebarHeight();

  window.addEventListener('resize', debounce(updateSidebarHeight, 200));

  hashChangeListener = handleHashChange;
  window.addEventListener('hashchange', hashChangeListener);
  checkHashOnLoad();
}


  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounce(updateSidebarHeight, 200));
    window.removeEventListener('hashchange', hashChangeListener);
    eventBus.removeEventListener('kx-doc-loaded', Sidecolumnrecord);
  });

  function xjieSidebarBtnClick() {
    if (window.innerWidth < 1024) {
      if (xjieSidebarShow.value === "-100%") {
        xjieSidebarShow.value = "0";
      } else {
        xjieSidebarShow.value = "-100%";
      }
    }
  }

  // console.log(headings.value);
  // console.log(headingsh2.value);
</script>
<template>
<div class="xjie-sidebar" :style="{ height: xjieSidebarHeight + 'px', transform: `translateX(${xjieSidebarShow})` }">
  <div class="xjie-sidebar-k">
    <div id="xjie-sidebar-content">
      <p>目录</p>
      <ul>
        <li v-for="(heading, index) in headings" :key="index">
          <a :href="'#' + heading">{{ heading }}</a>
          <ul v-if="headingsh2[heading].length > 0" class="xjie-sidebar-h2">
            <li v-for="(subheading, index) in headingsh2[heading]" :key="index">
              <a :href="'#' + subheading">{{ subheading }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <span id="xjie-sidebar-btn" @click="xjieSidebarBtnClick()">></span>
  </div>
</div>
</template>

<style scoped>
.xjie-sidebar {
  width: 200px;
  z-index: 9888;
  position: sticky;
  top: 70px;
  transition: transform 1s;
}
.xjie-sidebar-k {
  padding: 10px;
  position: relative;
  border-radius: 0 10px 10px 0;
  background-color: var(--xjie-sidebar-bgcolor);
}
#xjie-sidebar-content {
  border: 1px solid transparent;
}
.xjie-sidebar ul {
  list-style: none;
}
.xjie-sidebar-h2 {
  margin-left: 20px;
}
#xjie-sidebar-btn {
  display: none;
  width: 30px;
  height: 30px;
  background-color: var(--xjie-sidebar-bgcolor);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(100%, -50%);
  border-radius: 10px;
}
#xjie-sidebar-content li{
  margin: 5px 0;
}
@media screen and (min-width: 1500px) {
  .xjie-sidebar-k {
    border-radius: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .xjie-sidebar {
    position: fixed;
    top: 30%;
    margin:0;
  }
  #xjie-sidebar-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>