<template>
    <div class="SMS">
        <el-card shadow="never" class="textHade" style="background-color: #EAEFFF; border: 1px solid blue">
            <p>温馨提示：</p>
            <p> 1、国家必须和号码归属地一致，否则导致发送失败后果自负</p>
            <p> 2、立即发送是立即开始排队，定时发送是到了设置时间才进入排队</p>
            <p style="color: red;"> 3、包含签名短信小于等于70个字的按70个字一条计费，大于70个字按67字一条计费, 短信内容总字数不能超过 500字</p>

        </el-card>
        <el-card class="box-card" style="margin-top: 2vh;">
            <div class="main">
                <el-form :rules="rules" :label-position="labelPosition" label-width="100px" :model="formLabelAlign"
                    style="max-width: 460px">
                    <el-form-item label="国家代码" prop="region">
                        <el-select v-model="formLabelAlign.region" placeholder="请选择">
                            <el-option label="中国" value="86" />
                            <el-option label="美国" value="1" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="接收号码" prop="passName">
                        <el-input type="textarea" v-model="formLabelAlign.username" />
                    </el-form-item>
                    <el-form-item label="短信内容" prop="password">
                        <el-input type="textarea" v-model="formLabelAlign.password"
                            placeholder="发送之前请联系客服修改关键字，避免关键字被屏蔽导致到达率低" />
                    </el-form-item>
                    <el-form-item label="号码去重">
                        <el-radio-group v-model="formLabelAlign.par_password">
                            <el-radio label="是" />
                            <el-radio label="否" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="定时发送">
                        <el-radio-group v-model="formLabelAlign.dataS">
                            <el-radio label="立即发送" />
                            <el-radio label="定时发送" />
                        </el-radio-group>
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
    dataS:'',
})
const onSubmit=()=>{
    console.log("onSubmit");
}
const rules = reactive({
    region: [
        { required: true, message: '请选择国家', trigger: 'blur' },
    ],
    passName: [
        { required: true, message: '请输入接受号码', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入短信内容', trigger: 'blur' },
    ],
    par_password: [
        { required: true, message: '请再次输入新密码', trigger: 'blur' },
    ],
})
</script>
<style scoped>
.SMS {
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