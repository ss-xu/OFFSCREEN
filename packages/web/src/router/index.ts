import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const ROUTER_HOME = 'ROUTER_HOME';
export const ROUTER_ABOUT = 'ROUTER_ABOUT';
export const ROUTER_PROJECT = 'ROUTER_PROJECT';
export const ROUTER_CURATOR = 'ROUTER_CURATOR';


const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: ROUTER_HOME,
        component: Home
    },
    {
        path: '/about',
        name: ROUTER_ABOUT,
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/project',
        name: ROUTER_PROJECT,
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Project.vue')
    },
    {
        path: '/curator',
        name: ROUTER_CURATOR,
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Curator.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
