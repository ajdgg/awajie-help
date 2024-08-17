import * as Vue from 'vue'
import {createRouter,createWebHashHistory, createWebHistory} from "vue-router";
import Index from '../page/index.vue'
import XjieWeatherIndex from "../page/xjie-weather/xjie-weather-index.vue";
const routes = [
    {
        path: '/',
        component: Index,
        meta: {
            title: 'awesome ajie-help'
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
            {
                path: 'update',
                component: () => import('../page/xjie-weather/xjie-weather-update.vue'),
            },
        ]
    },
    {
        path: '/xjie-calc24/',
        component: () => import('../page/xjie-calc24/xjie-calc24-router.vue'),
        meta: {
            title: 'nonebot-plugin-xjie-calc24'
        },
        children: [
            {
                path: '',
                component: () => import('../page/xjie-calc24/xjie-calc24-index.vue')
            },
            {
                path: 'update',
                component: () => import('../page/xjie-calc24/xjie-calc24-update.vue'),
            },
        ]
    },
    {
        path: '/entertainment/',
        component: () => import('../page/entertainment/entertainment-router.vue'),
        children: [
            {
                path: '',
                component: () => import('../page/entertainment/ikun.vue'),
            },
            {
                path: 'ikun',
                component: () => import('../page/entertainment/ikun.vue'),
            }
        ]
    },
    {
        path: '/doc',
        name: 'doc',
        component: () => import('../page/doc.vue')
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