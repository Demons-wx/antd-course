/*
* @Author: wangxuan
* @Date:   2019-06-29 13:28:24
* @Last Modified by:   wangxuan
* @Last Modified time: 2019-07-06 20:01:39
*/

export default {
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd: true,
            dva: true,
        }],
    ],
    singular: true,
    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: '/',
                    component: './HelloWorld',
                },
                {
                    path: '/card',
                    component: './HelloWorld',
                },
                {
                    path: '/shoppingList',
                    component: './shoppingList',
                },
                {
                    path: '/square',
                    component: './Square',
                },
                {
                    path: '/demo',
                    component: './demo',
                },
                {
                    path: '/tree',
                    component: './tree',
                },
                {
                    path: '/dashboard',
                    routes: [
                        { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                        { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                        { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                    ]
                },
                {
                    path: '/puzzlecards',
                    component: './puzzlecards',
                },
                {
                    path: '/list',
                    component: '../page/list',
                },
                {
                    path: '/carousel',
                    component: './carousel/carouselDemo',
                },
                {
                    path: '/chart',
                    component: './chart',
                },
            ]
        }
        
    ],
    proxy: {
       '/dev': {
             target: 'https://official-joke-api.appspot.com',
             changeOrigin: true,
             pathRewrite: { "^/dev": "" }
       },
    }

};


























