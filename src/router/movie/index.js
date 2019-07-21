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
            path : '/movie',
            redirect : '/movie/running'
        }
    ]
}
