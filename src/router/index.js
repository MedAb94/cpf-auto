import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Contact from "@/views/Contact";
import Parts from "@/views/parts/Parts";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/parts',
        name: 'Parts',
        component: () => import("../views/parts/Index"),
        redirect: {name: 'PartsFilter'},
        children: [
            {
                path: 'filter',
                name: 'PartsFilter',
                component: Parts,
            },
            {
                path: 'search/:ref',
                name: 'PartsSearch',
                component:()=>import("../views/parts/SearchResult") ,
            },
            {
                path: 'per-cotegory/:categ_name/:categ_id/:model_id',
                name: 'CategParts',
                component:() => import("../views/parts/CategoryParts"),
            },
        ]
    },

    {
        path: '/auth',
        name: 'Auth',
        component: () => import("../views/auth/Index"),
        redirect: '/auth/login',
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import("../views/auth/Login"),
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return {selector: to.hash};
        if (savedPosition) return savedPosition;
        return {x: 0, y: 0};
    },
    routes
});

export default router
