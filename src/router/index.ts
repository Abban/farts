import {createRouter, createWebHistory} from 'vue-router'
import nProgress from 'nprogress';

const routes = [
    {
        path: '/:page?',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
        path: '/post/:slug',
        name: 'Post',
        component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        nProgress.start();
    }
    next();
});

router.afterEach(() => {
    nProgress.done();
});

export default router
