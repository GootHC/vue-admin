<template>
    <div class="API_transfer">
        <el-card shadow="never" class="textHade" style="background-color: #EAEFFF; border: 1px solid blue">
            <p>温馨提示：</p>
            <p> 1、发送API过户请求后，如果对方接收成功API就不再属于您所有，请认真核对对方的帐户</p>
            <p> 2、发送API过户请求后，对方必须在7天内接收，否则系统自动取消请求</p>
            <p > 3、API过户是用户双方自行达成的交易，如因交易不当引起的后果，本站不承担任何责任</p>
        </el-card>
        <el-card class="box-card" style="margin-top: 2vh;">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="API过户" name="first"><API_index/></el-tab-pane>
    <el-tab-pane label="收到的请求" name="second"><receive/></el-tab-pane>
    <el-tab-pane label="发出的请求" name="third"><issue/></el-tab-pane>
  </el-tabs>
        </el-card>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import API_index from './API_transfer_Son/index.vue'
import receive from './API_transfer_Son/receive.vue'
import issue from './API_transfer_Son/issue.vue'
const activeName = ref('first')

const handleClick = (tab, event) => {
//   console.log(tab, event)
}

</script>
<style scoped>
.API_transfer {
    width: 100%;
    height: 100%;
}

.textHade p {
    font-size: 12px;
    line-height: 30px;
    color: #0D236D;
    ;
}
</style>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>