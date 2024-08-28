/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2024-08-18 02:20:34
 */
const mdRouter = {
    "xjie-weather" :{
        path:'/xjie-weather',
        index: {
                path: '',
                title: 'nonebot-plugin-xjie-weather',
                filename: 'xjie-weather.md'
            },
        amap: {
                path: 'amap',
                title: 'nonebot-plugin-xjie-weather amap',
                filename: 'amap.md'
            }
    },
    calc24: {
        path:'/calc24',
        index: {
                path: '',
                title: 'nonebot-plugin-calc24',
                filename: 'index.md'
            }
    }
};

export { mdRouter };

const RedirectionRouter = [
    { path: '/xjie-weather/',
        children: [
            { path: '', redirect: '/doc?id=xjie-weather'},
            { path: 'amap', redirect: '/doc?id=xjie-weather&file=amap' }
        ]
    },
    { path: '/xjie-calc24/',
        children: [
            { path: '', redirect: '/doc?id=calc24'}
        ]
    }
]

export { RedirectionRouter }