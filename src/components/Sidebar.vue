<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            router
            :default-openeds="['1','2']"
        > <!--默认展开index为1的列-->
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
// import bus from "../common/bus";
export default {
    data() {
        return {
          items: [
                {
                    icon: "el-icon-lx-home",
                    index: "dashboard",
                    title: "系统首页"
                },
                {
                  icon: "el-icon-lx-cascades",
                  index: "1",
                  title: "实验室信息管理",
                  subs: [
                    {
                      index: "idle",
                      title: "实验室查询"
                    },{
                      index: "apply",
                      title: "申请实验室"
                    },{
                      index: "applyStatu",
                      title: "实验室申请查询"
                    },
                    {
                      index: "dealApply",
                      title: "处理申请"
                    },
                  ]
                },
              {
                icon: "el-icon-lx-cascades",
                index: "2",
                title: "光电设备使用申请",
                subs: [
                  {
                    index: "equipment",
                    title: "设备查询"
                  },{
                    index: "equipmentApply",
                    title: "设备申请查询"
                  },{
                    index: "usingApply",
                    title: "申请使用"
                  },{
                    index: "reviewApply",
                    title: "审核申请"
                  },
                ]
              },
              {
                icon: "el-icon-lx-cascades",
                index: "personnel",
                title: "实验室人员管理",
              },
              {
                icon: "el-icon-lx-cascades",
                index: "equipmentMaintain",
                title: "实验设备管理",
              },
              {
                icon: "el-icon-lx-cascades",
                index: "3",
                title: "实验设备维护",
                subs: [
                  {
                    index: "needRepaired",
                    title: "待维修设备"
                  },
                  {
                    index: "repairReport",
                    title: "填写维修信息"
                  },

                ]
              },
              {
                icon: "el-icon-lx-cascades",
                index: "4",
                title: "系统设置",
                subs: [
                  {
                    index: "modifyInfo",
                    title: "修改个人信息"
                  },{
                    index: "resetPassword",
                    title: "修改登录密码"
                  },
                ]
              },

                {
                    icon: "el-icon-lx-cascades",
                    index: "table",
                    title: "基础表格"
                },
                {
                    icon: "el-icon-lx-copy",
                    index: "tabs",
                    title: "tab选项卡"
                },
                {
                    icon: "el-icon-lx-calendar",
                    index: "31",
                    title: "表单相关",
                    subs: [
                        {
                            index: "form",
                            title: "基本表单"
                        },
                        //         {
                        //             index: "3-2",
                        //             title: "三级菜单",
                        //             subs: [
                        //                 {
                        //                     index: "editor",
                        //                     title: "富文本编辑器"
                        //                 },
                        //                 {
                        //                     index: "markdown",
                        //                     title: "markdown编辑器"
                        //                 }
                        //             ]
                        //         },
                        {
                            index: "upload",
                            title: "文件上传"
                        }
                    ]
                },
                {
                    icon: "el-icon-lx-emoji",
                    index: "icon",
                    title: "自定义图标"
                },
                {
                    icon: "el-icon-pie-chart",
                    index: "charts",
                    title: "schart图表"
                },
                {
                    icon: "el-icon-lx-global",
                    index: "i18n",
                    title: "国际化功能"
                },
                {
                    icon: "el-icon-lx-warn",
                    index: "7",
                    title: "错误处理",
                    subs: [
                        {
                            index: "permission",
                            title: "权限测试"
                        },
                        {
                            index: "404",
                            title: "404页面"
                        }
                    ]
                },
                {
                    icon: "el-icon-lx-redpacket_fill",
                    index: "/donate",
                    title: "支持作者"
                }
            ],
        };
    },
    created() {
      var identity = localStorage.getItem("ms_identity")
      switch (identity) {
        case "1": { //管理员
          this.items = [
            {
              icon: "el-icon-lx-home",
              index: "dashboard",
              title: "系统首页"
            },
            {
              icon: "el-icon-school",
              index: "1",
              title: "实验室信息管理",
              subs: [
                {
                  index: "idle",
                  title: "实验室查询"
                },{
                  index: "apply",
                  title: "申请实验室"
                },{
                  index: "applyStatu",
                  title: "实验室申请查询"
                },
                {
                  index: "dealApply",
                  title: "处理申请"
                },
              ]
            },
            {
              icon: "el-icon-box",
              index: "2",
              title: "光电设备使用申请",
              subs: [
                {
                  index: "equipment",
                  title: "设备查询"
                },{
                  index: "equipmentApply",
                  title: "设备申请查询"
                },{
                  index: "usingApply",
                  title: "申请使用"
                },{
                  index: "reviewApply",
                  title: "审核申请"
                },
              ]
            },
            {
              icon: "el-icon-user",
              index: "personnel",
              title: "实验室人员管理",
            },
            {
              icon: "el-icon-key",
              index: "equipmentMaintain",
              title: "实验设备管理",
            },
            {
              icon: "el-icon-place",
              index: "3",
              title: "实验设备维护",
              subs: [
                {
                  index: "needRepaired",
                  title: "待维修设备"
                },
                {
                  index: "repairReport",
                  title: "填写维修信息"
                },

              ]
            },
            {
              icon: "el-icon-setting",
              index: "4",
              title: "系统设置",
              subs: [
                {
                  index: "modifyInfo",
                  title: "修改个人信息"
                },{
                  index: "resetPassword",
                  title: "修改登录密码"
                },
              ]
            },
          ]
          break;
        }
        case "2": { //老师
          this.items = [
            {
              icon: "el-icon-lx-home",
              index: "dashboard",
              title: "系统首页"
            },
            {
              icon: "el-icon-school",
              index: "1",
              title: "实验室信息管理",
              subs: [
                {
                  index: "idle",
                  title: "实验室查询"
                },
                {
                  index: "dealApply",
                  title: "处理申请"
                },
              ]
            },
            {
              icon: "el-icon-box",
              index: "2",
              title: "光电设备使用申请",
              subs: [
                {
                  index: "equipment",
                  title: "设备查询"
                },{
                  index: "reviewApply",
                  title: "审核申请"
                },
              ]
            },
            {
              icon: "el-icon-user",
              index: "personnel",
              title: "实验室人员管理",
            },
            {
              icon: "el-icon-place",
              index: "3",
              title: "实验设备维护",
              subs: [
                {
                  index: "needRepaired",
                  title: "待维修设备"
                },
                {
                  index: "repairReport",
                  title: "填写维修信息"
                },

              ]
            },
            {
              icon: "el-icon-setting",
              index: "4",
              title: "系统设置",
              subs: [
                {
                  index: "modifyInfo",
                  title: "修改个人信息"
                },{
                  index: "resetPassword",
                  title: "修改登录密码"
                },
              ]
            },
          ]
          break;
        }
        case "3": { //学生
          this.items = [
            {
              icon: "el-icon-lx-home",
              index: "dashboard",
              title: "系统首页"
            },
            {
              icon: "el-icon-school",
              index: "1",
              title: "实验室信息管理",
              subs: [
                {
                  index: "idle",
                  title: "实验室查询"
                },{
                  index: "apply",
                  title: "申请实验室"
                },{
                  index: "applyStatu",
                  title: "实验室申请查询"
                },
              ]
            },
            {
              icon: "el-icon-box",
              index: "2",
              title: "光电设备使用申请",
              subs: [
                {
                  index: "equipment",
                  title: "设备查询"
                },{
                  index: "equipmentApply",
                  title: "设备申请查询"
                },{
                  index: "usingApply",
                  title: "申请使用"
                },
              ]
            },
            {
              icon: "el-icon-place",
              index: "3",
              title: "实验设备维护",
              subs: [
                {
                  index: "needRepaired",
                  title: "待维修设备"
                },
                {
                  index: "repairReport",
                  title: "填写维修信息"
                },

              ]
            },
            {
              icon: "el-icon-setting",
              index: "4",
              title: "系统设置",
              subs: [
                {
                  index: "modifyInfo",
                  title: "修改个人信息"
                },{
                  index: "resetPassword",
                  title: "修改登录密码"
                },
              ]
            },
          ]
          break;
        }
        case "4": { //设备管理员
          this.items = [
            {
              icon: "el-icon-lx-home",
              index: "dashboard",
              title: "系统首页"
            },
            {
              icon: "el-icon-school",
              index: "1",
              title: "实验室信息管理",
              subs: [
                {
                  index: "idle",
                  title: "实验室查询"
                },
              ]
            },
            {
              icon: "el-icon-box",
              index: "2",
              title: "光电设备使用申请",
              subs: [
                {
                  index: "equipment",
                  title: "设备查询"
                },
              ]
            },

            {
              icon: "el-icon-key",
              index: "equipmentMaintain",
              title: "实验设备管理",
            },
            {
              icon: "el-icon-place",
              index: "3",
              title: "实验设备维护",
              subs: [
                {
                  index: "needRepaired",
                  title: "待维修设备"
                },
                {
                  index: "repairReport",
                  title: "填写维修信息"
                },

              ]
            },
            {
              icon: "el-icon-setting",
              index: "4",
              title: "系统设置",
              subs: [
                {
                  index: "modifyInfo",
                  title: "修改个人信息"
                },{
                  index: "resetPassword",
                  title: "修改登录密码"
                },
              ]
            },
          ]
          break;
        }

      }
    },
  computed: {
        onRoutes() {
            return this.$route.path.replace("/", "");
        },
        collapse(){
            return this.$store.state.collapse
        },
        //默认展开的设备
        // openeds(){
        //   if (localStorage.getItem("identify") == "3"){
        //     return ['1','2']
        //   }else{
        //     return ['1']
        //   }
        // }
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
