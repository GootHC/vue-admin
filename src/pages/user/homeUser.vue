<template>
    <div class="homeUser">
        <el-row :gutter="12" style="justify-content: space-between;height: 100%;width: 100%;">
            <el-col :span="8">
                <el-card class="box-card" shadow="always">
                    <div class="text item">
                        <p class="dip"><span class="spText">基本信息</span></p>
                        <el-card :body-style="{}" class="e_span" shadow="never"><span> 账户名称 ： <span
                                    class="textSpan">xiaolil</span></span></el-card>
                        <el-card class="e_span" shadow="never"><span> 账户等级 ： <span
                                    class="textSpan">普通用户</span></span></el-card>
                        <el-card class="e_span" style="float: left;" shadow="never"><span> 邮箱认证 ： <span
                                    class="textSpan">未认证</span></span>
                            <router-link to="1" style="margin-left: 140px;color:#4fcc6a;">立即认证>>></router-link>
                        </el-card>

                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card" shadow="always">
                    <div class="text item">
                        <p class="dip"><span class="spText">新闻公告</span><span>查看全部>>></span></p>
                        <el-card style="margin: 10px 0;" shadow="never">
                            <span style="color: #A52A2A;"> 重要通知Telegram风控结束<span
                               style="color: #a09a9a;margin-left: 100px;">2023/6/10</span></span></el-card>


                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card" shadow="always">
                    <div class="text item">
                        <p class="dip"><span class="spText">资金信息</span></p>
                        <el-card style="margin: 10px 0;" shadow="never">
                            <el-row>
                                <el-col :span="8">
                                    <el-statistic title="总金额" prefix="$" :value="268500" />
                                </el-col>
                                <el-col :span="8">
                                    <el-statistic prefix="$" :value="138">
                                        <template #title>
                                            <div style="display: inline-flex; align-items: center">
                                                冻结金额

                                            </div>
                                        </template>
                                    </el-statistic>
                                </el-col>
                                <el-col :span="8">
                                    <el-statistic title="可用金额" text-color="red"  prefix="$" :value="172000"
                                        value-style="color:red;" />
                                </el-col>

                            </el-row>
                        </el-card>


                    </div>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { ChatLineRound, Male } from '@element-plus/icons-vue'
</script>
<style scoped>
.homeUser {
    height: 100%;
    width: 100%;
}

.el-col {
    text-align: center;
}

.text {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}

.e_span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    width: 100%;
}

.dip {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.spText {
    font-size: 1rem;
    font-weight: 700;
}

.textSpan {
    color: #4fcc6a;
}

.item {
    box-sizing: border-box;
    padding: 18px 0;
}

.box-card {
    width: 450px;
    /* height: 140%; */

}
</style>
<!-- <style>
.el-card__body{
    width: 100%;
    /* display: flex; */
    
}
</style> -->