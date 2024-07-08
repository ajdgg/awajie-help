import * as Vue from 'vue'
import {createRouter,createWebHashHistory, createWebHistory} from "vue-router";
import Index from '../page/index.vue'
import XjieWeatherIndex from "../page/xjie-weather/xjie-weather-index.vue";
const routes = [
    {
        path: '/',
        component: Index,
        meta: {
            title: 'awesome wajie-help'
        }
    },
    {
        path: '/xjie-weather/',
        component: XjieWeatherIndex,
        meta: {
            title: 'nonebot-plugin-xjie-weather'
        },
        children: [
            {
                path: '',
                component: () => import('../page/xjie-weather/xjie-weather.vue'),
            },
            {
                path: 'amap',
                component: () => import('../page/xjie-weather/xjie-weather-amap.vue'),
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'errorpage',
        component: () => import('../page/404.vue')
    }
]
const router = createRouter({
    // history:createWebHashHistory(),
    // routes
    history: createWebHistory(),
    routes
})
export default router