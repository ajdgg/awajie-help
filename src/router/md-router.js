const mdRouter = {
    "xjie-weather" :{
        path:'/xjie-weather',
        index: {
                path: '',
                title: 'xjie-weather',
                filename: 'xjie-weather.md'
            },
        amap: {
                path: 'amap',
                title: 'xjie-weather amap',
                filename: 'amap.md'
            }
    },
    calc24: {
        path:'/calc24',
        index: {
                path: '',
                title: 'calc24',
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