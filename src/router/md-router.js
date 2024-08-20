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
    { path: '/mdl', redirect: '/doc?id=xjie-weather&file=index' },
]

export { RedirectionRouter }