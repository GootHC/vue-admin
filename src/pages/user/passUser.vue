<template>
    <div class="passUser">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>修改密码</span>

                </div>
            </template>
            <el-form  :rules="rules" :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
                <el-form-item label="原密码" prop="passName">
                    <el-input v-model="formLabelAlign.username" />
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input v-model="formLabelAlign.password" />
                </el-form-item>
                <el-form-item label="确认密码" prop="par_password">
                    <el-input v-model="formLabelAlign.par_password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('left')

const formLabelAlign = reactive({
    username: '',
    password: '',
    par_password: '',
})
const onSubmit=()=>{
    console.log("onSubmit");
}
const rules = reactive({
  passName: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
  { required: true, message: '请输入新密码', trigger: 'blur' },
  ],
  par_password: [
  { required: true, message: '请再次输入新密码', trigger: 'blur' },
  ],
  })
</script>
<style scoped>
.passUser {
    width: 100%;
    height: 100%;
}

.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 100%;
}
</style>