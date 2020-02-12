<template>
    <div class="user-page">
        <el-button @click="api()" type="primary">请求</el-button>
    </div>
</template>

<script>
export default {
    name: 'User',
    methods: {
        api () {
            console.log(this.moment().format('YYYY/MM/DD HH:mm:ss'))
            this.axios.get('/article')
        }
    }
}
</script>
