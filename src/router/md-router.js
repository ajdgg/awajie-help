/*
 * @Author: AwAjie 139576615+ajdgg@users.noreply.github.com
 * @Date: 2024-08-18 02:20:34
 * @LastEditors: AwAjie 139576615+ajdgg@users.noreply.github.com
 * @LastEditTime: 2024-08-22 22:37:27
 * @FilePath: \awajie-help\src\router\md-router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
            { path: '', redirect: '/doc?id=xjie-weather&file=index'},
            { path: 'amap', redirect: '/doc?id=xjie-weather&file=amap' }
        ]
    },
    { path: '/xjie-calc24/',
        children: [
            { path: '', redirect: '/doc?id=calc24&file=index'}
        ]
    }
]

export { RedirectionRouter }