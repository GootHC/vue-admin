<template>
    <div class="recharge">
        <el-card shadow="never" class="textHade" style="background-color: #EAEFFF; border: 1px solid blue">

            <p>温馨提示：</p>
            <p> 1、目前仅支持USDT充值，充值的金额不支持提现</p>
            <p>2、金额会在支付后1分钟内到账，如果5分钟未到账请联系客服</p>
            <p style="color: red;"> 3、实际转账金额必须与支付页面显示金额一致，否则无法到账</p>

        </el-card>
        <el-card class="box-card" style="margin-top: 2vh;">
            <div class="main">
                <div class="usdt">
                    <span>支付方式</span>
                    <img src="../../../public/image/usdt.png" alt="">
                    <span>USDT-TRC20</span>
                </div>
                <div class="usdt">
                    <p>账户余额 <span style="color: red;font-size: 1.2rem;">$0.000</span></p>
                </div>
                <el-form :rules="rules" :label-position="labelPosition" label-width="100px" :model="formLabelAlign"
                    style="max-width: 460px">
                    <el-form-item label="充值金额" prop="passName">
                        <el-input  v-model="formLabelAlign.username" />
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input  v-model="formLabelAlign.password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button size="large" type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
    username: '',
    password: '',
    par_password: '',
    region: '',
    dataS: '',
})
const onSubmit = () => {
    console.log("onSubmit");
}
const rules = reactive({
    passName: [
        { required: true, message: '必须填写金额', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})
</script>
<style scoped>
.recharge {
    width: 100%;
    height: 100%;
}

.textHade p {
    font-size: 12px;
    line-height: 30px;
    color: #0D236D;
    ;
}
.usdt{
    height: 50px;
    display: flex;
    align-items: center;
    margin: 10px 0;
  
}
.usdt img{
    height: 80%;
    border-radius: 50%;
    margin: 0px 10px;
}
</style>