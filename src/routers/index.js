import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView  from '../views/NewsView.vue';
import AskView  from '../views/AskView.vue';
import JobsView  from '../views/JobsView.vue';
import ItemView  from '../views/ItemView.vue';
import UserView  from '../views/UserView.vue';
import tuigridView  from '../views/tuigridView.vue';
import VendMaster  from '../views/VendMaster.vue';
import SmEmployee  from '../views/SmEmployee.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode :'history',
    routes :[
        {
            path:'/',
            redirect :'/news',
        },
        {
            path:'/news',
            component:NewsView,
        },
        {
            path:'/ask',
            component: AskView,
        },
        {
            path:'/jobs',
            component:JobsView,
        },
        {
            path:'/item',
            component:ItemView,
        },
        {
            path:'/user',
            component:UserView,
        } ,
        {
            path:'/tuigrid',
            component:tuigridView,
        },
        {
            path:'/vendmst',
            component:VendMaster,
        },
        {
            path:'/smemp',
            component:SmEmployee,
        },
    ]
});

console.log(router);