import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import XjieSidebar from "./components/xjie-sidebar.vue";

const app = createApp(App)

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

app.component('xjie-sidebar', XjieSidebar)
app.use(router)
app.mount('#app')
