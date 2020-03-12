<template>
    <div class="page main">
        <v-header></v-header>
        <el-container class="page-container">
            <el-menu
                router
                :default-active="$route.name"
                class="el-menu-vertical"
                :collapse="isCollapse"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#409EFF">
                <el-scrollbar>
                    <el-menu-item :index="'dashboard'">
                        <i class="el-icon-location"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item :index="'check'">
                        <i class="el-icon-set-up"></i>
                        <span slot="title">政务信息资源目录列表</span>
                    </el-menu-item>
                    <el-menu-item :index="'devops'">
                        <i class="el-icon-set-up"></i>
                        <span slot="title">运维检查项配置管理</span>
                    </el-menu-item>
                    <el-menu-item :index="'info'">
                        <i class="el-icon-set-up"></i>
                        <span slot="title">运维记录管理</span>
                    </el-menu-item>
                    <el-menu-item :index="'mobilesafe'">
                        <i class="el-icon-set-up"></i>
                        <span slot="title">移动互联安全管理</span>
                    </el-menu-item>
                </el-scrollbar>
            </el-menu>
            <el-container>
                <el-header class="vertical-middle">
                    <span @click="isCollapse = !isCollapse" class="icon"><i :class="['icon', isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i></span>
                    <span>首页 <span style="color: #C0C4CC;">{{$route.name === 'dashboard' ? '' : `/ ${$route.meta.label}`}}</span></span>
                </el-header>
                <el-tabs :value="$route.name" @input="selectPage" closable @tab-remove="closeTabel">
                    <el-tab-pane v-for="item in openedTabs" :key="item.name" :label="item.label" :name="item.name">
                    </el-tab-pane>
                </el-tabs>
                <el-scrollbar class="page-main-container">
                    <router-view></router-view>
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from 'src/components/Header'

export default {
    name: 'Main',
    data () {
        return {
            isCollapse: false,
            openedTabs: [{
                name: 'dashboard',
                label: '首页'
            }]
        }
    },
    watch: {
        '$route.name' () {
            const index = this.openedTabs.findIndex(item => item.name === this.$route.name)
            if (index === -1) {
                this.openedTabs.push({
                    name: this.$route.name,
                    label: this.$route.meta.label
                })
            }
        }
    },
    created () {
        this.$route.name !== 'dashboard' && this.openedTabs.push({
            name: this.$route.name,
            label: this.$route.meta.label
        })
    },
    methods: {
        selectPage (v) {
            this.$route.name !== v && this.$router.push({ name: v })
        },
        closeTabel (v) {
            const index = this.openedTabs.findIndex(item => item.name === v)
            this.openedTabs.splice(index, 1)
            this.$route.name === v && this.$router.push({ name: this.openedTabs[index-1].name })
        }
    },
    components: {
        vHeader: Header
    }
}
</script>

<style lang="scss">
.page.main {
    .page-container {
        height: calc(100% - 50px);
        .el-menu {
            height: 100%;
            .el-scrollbar {
                height: 100%;
            }
        }
        .el-header {
            font-size: 14px;
            height: 50px !important;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            .icon {
                font-size: 0;
                cursor: pointer;
                .el-icon-s-fold, .el-icon-s-unfold {
                    font-size: 22px;
                }
            }
        }
        .el-tabs {
            .el-tabs__nav-scroll {
                padding: 0 20px;
            }
            #tab-dashboard {
                .el-icon-close {
                    display: none;
                }
            }
            .el-tabs__header {
                margin-bottom: 0;
            }
        }
        .page-main-container {
            .el-scrollbar__view {
                box-sizing: border-box;
                padding: 20px;
            }
        }
    }
}
</style>
