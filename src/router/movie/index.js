export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/city'),
        },
        {
            path: 'running',
            component: () => import('@/components/running'),
        },
        {
            path: 'upcoming',
            component: () => import('@/components/upcoming'),
        },
        {
            path: 'search',
            component: () => import('@/components/search'),
        },
        {
            path : 'detail/1/:movieId',
            components : {
                default : ()=> import('@/components/running'),
                detail: ()=> import('@/views/movie/detail')
            },
             props : {
                detail : true
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default : ()=> import('@/components/upcoming'),
                detail: ()=> import('@/views/movie/detail')
            },
            props : {
                detail : true
            }
        },
        //设置重定向
        {
            path : 'detail/1/1',
            components : {
                detail : ()=> import('@/views/movie/detail')
            }
        },
        {
            path : 'detail/2/1',
            components : {
                detail : ()=> import('@/views/movie/detail')
            }
        },
        {
            path : '/movie',
            redirect : '/movie/running'
        }
    ]
}
