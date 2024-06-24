import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/HomeView.vue')
                },
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/views/LoginView.vue')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/views/RegisterView.vue')
                },
                {
                    path: 'post',
                    name: 'post',
                    component: () => import('@/views/PostView.vue')
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue')
                }
            ]
        },
        {
            path: '/article',
            name: 'article',
            component: () => import('@/views/ArticleView.vue')
        },
        {
            path: '/admin/',
            component: () => import('@/views/admin/AdminLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'admin',
                    component: () => import('@/views/admin/HomeView.vue')
                },
                {
                    path: 'post-notices',
                    name: 'post-notices',
                    component: () => import('@/views/admin/PostNoticesView.vue')
                },
                {
                    path: 'edit-notices',
                    name: 'edit-notices',
                    component: () => import('@/views/admin/EditNoticesView.vue')
                },
                {
                    path: 'post-banners',
                    name: 'post-banners',
                    component: () => import('@/views/admin/PostBannersView.vue')
                },
                {
                    path: 'edit-banners',
                    name: 'edit-banners',
                    component: () => import('@/views/admin/EditBannersView.vue')
                },
                {
                    path: 'post-articles',
                    name: 'post-articles',
                    component: () => import('@/views/admin/PostArticlesView.vue')
                },
                {
                    path: 'edit-articles',
                    name: 'edit-articles',
                    component: () => import('@/views/admin/EditArticlesView.vue')
                },
                {
                    path: 'edit-users',
                    name: 'edit-users',
                    component: () => import('@/views/admin/EditUsersView.vue')
                }
            ]
        }
    ]
})

export default router
