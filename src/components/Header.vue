<template>
    <header class="component header vertical-middle">
        <span class="logo">南京市商务局综合门户</span>
        <div class="user vertical-middle">
            <span class="name">Super Admin</span>
            <el-dropdown :trigger="'click'" @command="clickDropdown">
                <el-avatar shape="square" :size="'medium'" :src="''"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-s-home" command="main">首页</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button" command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        clickDropdown (action) {
            action === 'exit' && this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style lang="scss">
.component.header {
    width: 100%;
    height: 50px;
    background-color: #70add9;
    .logo {
        color: #ffffff;
        font-size: 18px;
        margin-left: 20px;
    }
    .user {
        float: right;
        height: 100%;
        margin-right: 20px;
        .name {
            color: #ffffff;
            margin-right: 10px;
        }
        .el-avatar {
            cursor: pointer;
        }
    }
}
</style>
