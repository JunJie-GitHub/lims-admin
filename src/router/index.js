import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import (
                /* webpackChunkName: "dashboard" */
                "../views/Dashboard.vue")
            },
            {
                path: "/idle",
                name: "idle",
                meta: {
                    title: '实验室查询'
                },
                component: () => import (
                    "../views/infoManagement/Idle.vue")
            },{
                path: "/apply",
                name: "apply",
                meta: {
                    title: '申请实验室'
                },
                component: () => import (
                    "../views/infoManagement/Apply.vue")
            },{
                path: "/applyStatu",
                name: "applyStatu",
                meta: {
                    title: '实验室申请查询'
                },
                component: () => import (
                    "../views/infoManagement/ApplyStatu.vue")
            }, {
                path: "/dealApply",
                name: "dealApply",
                meta: {
                    title: '处理申请'
                },
                component: () => import (
                    "../views/infoManagement/DealApply.vue")
            },
            {
                path: "/equipment",
                name: "equipment",
                meta: {
                    title: '设备查询'
                },
                component: () => import (
                    "../views/equipmentApply/Equipment.vue")
            },{
                path: "/equipmentApply",
                name: "equipmentApply",
                meta: {
                    title: '设备申请查询'
                },
                component: () => import (
                    "../views/equipmentApply/EquipmentApply.vue")
            },{
                path: "/usingApply",
                name: "usingApply",
                meta: {
                    title: '申请使用'
                },
                component: () => import (
                    "../views/equipmentApply/UsingApply.vue")
            },{
                path: "/reviewApply",
                name: "reviewApply",
                meta: {
                    title: '审核申请'
                },
                component: () => import (
                    "../views/equipmentApply/ReviewApply.vue")
            },
            {
                path: "/personnel",
                name: "personnel",
                meta: {
                    title: '实验室人员管理'
                },
                component: () => import (
                    "../views/Personnel.vue")
            },
            {
                path: "/equipmentMaintain",
                name: "equipmentMaintain",
                meta: {
                    title: '实验设备管理'
                },
                component: () => import (
                    "../views/EquipmentMaintain.vue")
            },
            {
                path: "/needRepaired",
                name: "needRepaired",
                meta: {
                    title: '待维修设备'
                },
                component: () => import (
                    "../views/equipmentMaintain/NeedRepaired.vue")
            },
            {
                path: "/repairReport",
                name: "repairReport",
                meta: {
                    title: '填写维修信息'
                },
                component: () => import (
                    "../views/equipmentMaintain/RepairReport.vue")
            },
            {
                path: "/modifyInfo",
                name: "modifyInfo",
                meta: {
                    title: '修改个人信息'
                },
                component: () => import (
                    "../views/setting/ModifyInfo")
            },
            {
                path: "/resetPassword",
                name: "resetPassword",
                meta: {
                    title: '修改登录密码'
                },
                component: () => import (
                    "../views/setting/ResetPassword")
            },
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import (
        /* webpackChunkName: "login" */
        "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;