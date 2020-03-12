<template>
    <div class="page check">
        <el-form class="search-panel" size="mini" label-width="80px">
            <div class="form-submit">
                <el-row :gutter="20">
                    <el-col :sm="11" :lg="11">
                        <el-button type="primary" size="small">查询</el-button>
                    </el-col>
                    <el-col :sm="11" :lg="11">
                        <el-button size="small">晴空</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="form-container">
                <el-row :gutter="20">
                    <el-col :sm="12" :lg="10">
                        <el-form-item label="审批人">
                            <el-date-picker
                                v-model="form.time"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="11" :lg="6">
                        <el-form-item label="审批人">
                            <el-input placeholder="审批人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :lg="6">
                        <el-form-item label="审批人">
                            <el-input placeholder="审批人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="11" :lg="10">
                        <el-form-item label="审批人">
                            <el-select v-model="form.user" placeholder="请选择">
                                <el-option
                                    label="张大亨"
                                    value="dahengzhang">
                                </el-option>
                                <el-option
                                    label="沈培"
                                    value="shenpei">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :lg="10">
                        <el-form-item label="审批人">
                            <el-input placeholder="审批人"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
        </el-form>
        <div class="tools-bar">
            <el-button type="primary" size="small">查询</el-button>
            <el-button type="primary" size="small">查询</el-button>
            <el-button type="primary" size="small">查询</el-button>
            <el-button type="danger" size="small">查询</el-button>
        </div>
        <el-table
            border
            :data="tableData">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.page"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'CheckPage',
    data () {
        return {
            form: {
                time: [],
                user: ''
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            pagination: {
                page: 1
            }
        }
    },
    methods: {
        handleSizeChange (v) {},
        handleCurrentChange (v) {}
    }
}
</script>

<style lang="scss">
.page.check {
    .search-panel {
        margin-bottom: 30px;
        .form-submit {
            float: right;
            width: 150px;
            box-sizing: border-box;
            text-align: right;
            padding-top: 20px;
            padding-right: 20px;
        }
        .form-container {
            margin-right: 150px;
            .el-form-item {
                display: inline-block;
                width: 100%;
            }
            .el-date-editor {
                width: 100%;
            }
            .el-select {
                width: 100%;
            }
        }
    }
    .tools-bar {
        margin-bottom: 10px;
    }
    .el-pagination {
        margin-top: 10px;
    }
}
</style>
