<template>
    <el-container class="page main">
        <el-menu
            router
            :default-active="$route.path"
            class="el-menu-vertical"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu :index="'/'">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item :index="'/main/user'"><i class="el-icon-s-grid"></i>用户管理</el-menu-item>
                <el-menu-item :index="'/main/resource'"><i class="el-icon-s-grid"></i>资源管理</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-container>
            <el-header class="vertical-middle">
                <span @click="isCollapse = !isCollapse">
                    <i :class="['icon', isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
                </span>
                <div class="header-right vertical-middle">
                    <el-avatar :size="'medium'" :src="''"></el-avatar>
                    <el-button type="text" @click="$router.push('/')">退出</el-button>
                </div>
            </el-header>
            <router-view class="page-container"></router-view>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Main',
    data () {
        return {
            isCollapse: false
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
.page.main {
    .el-menu {
        height: 100%;
    }
    .el-header {
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
        .icon {
            font-size: 28px;
            cursor: pointer;
        }
        .header-right {
            float: right;
            height: 100%;
        }
    }
    .page-container {
        height: calc(100% - 60px);
        margin-top: 5px;
        overflow: scroll;
    }
}
</style>
