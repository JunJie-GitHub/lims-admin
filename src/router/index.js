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
            }, {
                path: "/equipmentApply",
                name: "equipmentApply",
                meta: {
                    title: '设备申请查询'
                },
                component: () => import (
                    "../views/equipmentApply/EquipmentApply.vue")
            },{
                path: "/useApply",
                name: "useApply",
                meta: {
                    title: '申请使用'
                },
                component: () => import (
                    "../views/equipmentApply/UseApply.vue")
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
                path: "/equipment",
                name: "equipment",
                meta: {
                    title: '实验设备管理'
                },
                component: () => import (
                    "../views/Equipment.vue")
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
            {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import (
                "../views/BaseTable.vue")
            }, {
                path: "/charts",
                name: "basecharts",
                meta: {
                    title: '图表'
                },
                component: () => import (
                /* webpackChunkName: "charts" */
                "../views/BaseCharts.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: () => import (
                /* webpackChunkName: "form" */
                "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import (
                /* webpackChunkName: "tabs" */
                "../views/Tabs.vue")
            }, {
                path: "/donate",
                name: "donate",
                meta: {
                    title: '鼓励作者'
                },
                component: () => import (
                /* webpackChunkName: "donate" */
                "../views/Donate.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import (
                /* webpackChunkName: "permission" */
                "../views/Permission.vue")
            }, {
                path: "/i18n",
                name: "i18n",
                meta: {
                    title: '国际化语言'
                },
                component: () => import (
                /* webpackChunkName: "i18n" */
                "../views/I18n.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import (
                /* webpackChunkName: "upload" */
                "../views/Upload.vue")
            }, {
                path: "/icon",
                name: "icon",
                meta: {
                    title: '自定义图标'
                },
                component: () => import (
                /* webpackChunkName: "icon" */
                "../views/Icon.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */
                '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */
                '../views/403.vue')
            }
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