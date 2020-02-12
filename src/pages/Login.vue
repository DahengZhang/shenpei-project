<template>
    <div class="page login vertical-middle">
        <div class="container">
            <el-form>
                <el-form-item>
                    <el-input v-model="account" placeholder="账户">
                        <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="password" placeholder="密码">
                        <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="$router.push('/main/user')" type="primary" size="medium" class="login-btn">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            account: '',
            password: ''
        }
    }
}
</script>

<style lang="scss">
.login {
    background-color: #2d3a4b;
    .container {
        width: 100%;
        .el-form {
            width: 450px;
            margin: 0 auto;
            .login-btn {
                width: 100%;
            }
        }
    }
}
</style>
