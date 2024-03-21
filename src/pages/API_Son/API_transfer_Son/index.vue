<template>
     <div class="main">
                <el-form :rules="rules" :label-position="labelPosition" label-width="100px" :model="formLabelAlign"
                    style="max-width: 460px">
                    <el-form-item label="API列表" prop="passName">
                        <el-input placeholder="请输入您的API,每行一条" type="textarea" v-model="formLabelAlign.username" />
                    </el-form-item>
                    <el-form-item label="接收内容" prop="password">
                        <el-input  v-model="formLabelAlign.password"
                            placeholder="请输入对方的用户名" />
                    </el-form-item>
                    <el-form-item label="过户方式">
                        <el-radio-group v-model="formLabelAlign.par_password" prop="password">
                            <el-radio label="0元过户" />
                            <el-radio label="带价过户" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="附言备注" >
                        <el-input  v-model="formLabelAlign.dataS"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="large" type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const labelPosition = ref('right')

const formLabelAlign = reactive({
    username: '',
    password: '',
    par_password: '',
   
    dataS:'',
})
const onSubmit=()=>{
    console.log("onSubmit");
}
const rules = reactive({
    passName: [
        { required: true, message: 'API列表不能为空', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
    ],
    par_password: [
        { required: true, message: '', trigger: 'blur' },
    ],
})
</script>
<style scoped>
</style>