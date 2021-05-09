<template>
    <div class="about">
        <v-header />
        <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }" >
<!--                  transition标签导致点击新增的页面显示不出来-->
<!--                    <transition name="move" mode="out-in">  &lt;!&ndash;过渡效果&ndash;&gt;-->
<!--                      动态组件(缓存组件) :include: 有条件地缓存-->
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
<!--                    </transition>-->
                </router-view>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>
<script>
import vHeader from "../components/Header";
import vSidebar from "../components/Sidebar";
import vTags from "../components/Tags.vue";
export default {
    components: {
        vHeader,
        vSidebar,
        vTags
    },
    computed: {
        tagsList() {
          console.log("=================item.name: " + this.$store.state.tagsList.map(item => item.name))
            return this.$store.state.tagsList.map(item => item.name);
        },
        collapse() {
          console.log("=================item.collapse: " + this.$store.state.collapse)
            return this.$store.state.collapse;
        }
    }
};
</script>
