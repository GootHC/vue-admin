<template>
    <div class="submitRecord">
        <el-card class="box-card" style="width: 100%;height: 100%;">
            <div class="demo-input-size">
                <el-input style="width: 60%;margin-right: 20px;" v-model="input" class="w-50 m-2" size="large"
                    placeholder="请输入关键字" />
                <el-button-group class="ml-4">
                    <el-button type="primary" :icon="Search">搜索</el-button>
                    <el-button type="primary" :icon="Refresh">刷新</el-button>
                    <el-button type="primary" :icon="Setting">筛选</el-button>
                </el-button-group>
            </div>
            <div class="main">

                <el-table v-loading="loading" :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
                    <el-table-column prop="date" label="序号" />
                    <el-table-column prop="date" label="订单编号" width="180" />
                    <el-table-column prop="name" label="发送数量" sortable width="180" />
                    <el-table-column prop="name" label="目的地" />
                    <el-table-column prop="name" label="总价（USD）" sortable />
                    <el-table-column prop="name" label="消息内容" />
                    <el-table-column prop="name" label="提交时间" />
                    <el-table-column prop="name" label="完成时间" />
                    <el-table-column prop="name" label="执行状态" />
                    <el-table-column prop="name" label="操作" />

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
    Search, Refresh, Setting
} from '@element-plus/icons-vue'
import { ref,onMounted} from 'vue'
const formatter = (row, column) => {
    return row.address
}
const input =ref('')
const currentPage4 = ref(4)
const loading = ref(true)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
onMounted(()=>{
    setTimeout(()=>{
        loading.value=false
    },3000)
})
   
    
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
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
   
]
</script>
<style scoped>
.submitRecord {
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