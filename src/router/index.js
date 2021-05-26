import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Contact from "@/views/Contact";
import Parts from "@/views/Parts";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    } ,
    {
        path: '/about',
        name: 'About',
        component: About
    } ,
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/parts',
        name: 'Parts',
        component: Parts
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import("../views/auth/Index"),
        redirect: '/auth/login',
        children:[
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
    routes
});

export default router
