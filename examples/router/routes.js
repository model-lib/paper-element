let routes = [
    {
        path: '/paper-control-panel',
        name: 'paper-control-panel',
        mete:{
            title: '控制轮盘', icon: '', affix: true 
        },
        component: () =>  import( '@/examples/views/test')

    }
]
export default routes