<template>
    <div class="Details">
        <el-col>
            <el-card class="box-card" shadow="always">
                <div class="text item">
                    <p class="dip">
                        <span class="spText">
                            <span style="font-weight: 700;margin-right: 30px;">财务明细</span>
                            <span style="color: #ccc;font-size: 1px;">
                                <span>您在本站共消费：</span>
                                <span>0</span>
                                <span>（USD）</span>
                                <span>共充值:</span>
                                <span>0</span>
                                <span>（USD）</span>
                            </span>
                        </span>
                    </p>
                    <el-card style="margin: 10px 0;" shadow="never">
                        <el-row>
                            <el-col :span="8">
                                <el-statistic title="总金额(USD)" prefix="$" :value="268500" />
                            </el-col>
                            <el-col :span="8">
                                <el-statistic prefix="$" :value="138">
                                    <template #title>
                                        <div style="display: inline-flex; align-items: center">
                                            冻结金额(USD)

                                        </div>
                                    </template>
                                </el-statistic>
                            </el-col>
                            <el-col :span="8">
                                <el-statistic title="可用金额(USD)" text-color="red" prefix="$" :value="172000"
                                    value-style="color:red;" />
                            </el-col>

                        </el-row>
                    </el-card>
                    <el-card class="box-card" style="width: 100%;height: 100%;">
            <div class="demo-input-size">
                
                <el-input style="width: 40%;margin-right: 20px;" v-model="input" class="w-50 m-2" size="large"
                    placeholder="请输入订单编号" />
                <el-button-group class="ml-4">
                    <el-button type="primary" :icon="Search">搜索</el-button>
                    <el-button type="primary" :icon="Refresh">刷新</el-button>
                    <el-button type="primary" :icon="Setting">筛选</el-button>
                </el-button-group>
            </div>
            <div class="main">

                <el-table v-loading="loading" :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }"
                    style="width: 100%">
                   
                    <el-table-column prop="name" label="账单编号" width="180" />
                    <el-table-column prop="name" label="类型" />
                    <el-table-column prop="name" label="备注" sortable />
                    <el-table-column prop="name" label="账变金额（USD）" sortable />
                    <el-table-column prop="name" label="余额（USD）" sortable />
                    <el-table-column prop="name" label="时间" sortable />
                    


                </el-table>

            </div>
            <div class="demo-pagination-block">

                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                    :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
                    layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </el-card>

                </div>
            </el-card>
        </el-col>
    </div>
</template>
<script setup>
import {
    Search, Refresh, Setting,ArrowRight
} from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
const input = ref('')
const formatter = (row, column) => {
    return row.address
}
const loading = ref(true)
const region = ref('')
const currentPage4 = ref(4)
onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 3000)
})

const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },

]
</script>
<style scoped>
.Details {
    width: 100%;
    height: 100%;
}

.main {
    width: 100%;
    height: 600px;
    min-height: 600px;
    overflow: auto;
}</style>