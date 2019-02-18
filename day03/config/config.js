export default{
    plugins: [
        ['umi-plugin-react',{
            antd: true
        }]
    ],

    singular: true,

    routes: [{

        /**
         * 把路由对应的组件渲染到布局(容器)中去
         */
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './HelloWorld',
            },
            {
                page: '/dashboard',
                routes: [
                    {path: '/dashboard/analysis',component: 'Dashboard/Analysis'},
                    {path: '/dashboard/monitor',component: 'Dashboard/Monitor'},
                    {path: '/dashboard/workplace',component: 'Dashboard/Workplace'}
                ]
            }
        ]
    }]
}