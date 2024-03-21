<template>
    <div class="API_Buy">
        <el-card class="box-card" style="width: 100%;height: 100%;">
            <div class="demo-input-size">
                <span style="font-size: 12px;">选择国家</span>
                <el-select size="large" style="margin: 0 20px;" v-model="region" placeholder="请选择">
                    <el-option label="中国" value="86" />
                    <el-option label="美国" value="1" />
                </el-select>
                <el-input style="width: 40%;margin-right: 20px;" v-model="input" class="w-50 m-2" size="large"
                    placeholder="请输入关键字" />
                <el-button-group class="ml-4">
                    <el-button type="primary" :icon="Search">搜索</el-button>
                    <el-button type="primary" :icon="Refresh">刷新</el-button>
                    <el-button type="primary" :icon="Setting">筛选</el-button>
                </el-button-group>
            </div>
            <div class="main">

                <el-table v-loading="loading" :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }"
                    style="width: 100%">
                    <el-table-column prop="date" label="序号" />
                    <el-table-column prop="date" label="商标" width="180" >
                        <template #default="scope">
                           
                          <img style="width: 60px;height: 60px;" src="../../../public/image/ad.webp" alt="">
                       </template>
                    </el-table-column>
                    <el-table-column prop="name" label="项目名称" width="180" />
                    <el-table-column prop="name" label="国家" />
                    <el-table-column prop="name" label="剩余数量" sortable />
                    <el-table-column prop="name" label="单价（USD）" sortable />
                    <el-table-column prop="name" label="操作">
                        <template #default="scope">
                           
                            <el-button size="small" type="primary"
                                @click="handleDelete(scope.$index, scope.row)">去取号<el-icon><ArrowRight /></el-icon></el-button>
                        </template>
                    </el-table-column>


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
.API_Buy {
    width: 100%;
    height: 100%;
}

.main {
    width: 100%;
    height: 600px;
    min-height: 600px;
    overflow: auto;
}
</style>