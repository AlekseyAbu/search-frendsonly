import  Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const SearchComponent = () => import('./pages/Home.vue');
const Compilation = () => import('./pages/Compilation.vue');

export default new Router({


    mode: 'history',
    routes: [
        {
            path: '/search',
            name: 'search-main',
            component: SearchComponent,
        },
        {
            path: '/search/:param',
            name: 'searchParam',
            component: Compilation
        },
    ]
})