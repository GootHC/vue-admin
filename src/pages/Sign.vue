<template>
    <div class="Sign">
        <div class="main">
            <div class="mins">
                <h2>注册</h2>
                <el-form size="large" :label-position="'top'" label-width="100px" :model="formLabelAlign"
                    style="max-width: 460px" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="formLabelAlign.username" placeholder="请输入用户名">
                            <template #prefix>
                                <el-icon class="el-input__icon">
                                    <User />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入密码" v-model="formLabelAlign.password" show-password>
                            <template #prefix>
                                <el-icon class="el-input__icon">
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="per_password">
                        <el-input type="password" placeholder="请再次输入密码" v-model="formLabelAlign.per_password" show-password>
                            <template #prefix>
                                <el-icon class="el-input__icon">
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width: 100%;margin: 10% 0;" type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
                <div class="foots"><span>已有账号？<router-link to="/sms/login">去登录</router-link> </span></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref,onMounted,onUnmounted} from 'vue'
import useCounter from '../Store/counter'
import router from '../router'
import { ElMessage } from 'element-plus'
const counterStore = useCounter()
const formLabelAlign = reactive({
    username: '',
    password: '',
    per_password: '',
})
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },

    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },

    ],
    per_password: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },

    ]
})
const open1 = () => {
    ElMessage({
        message: '注册成功，已自动登录',
        type: 'success',
    })
}
const open2 = () => {
    ElMessage({
        message: '两次密码不一致',
        type: 'warning',
    })
}
const open3 = () => {
    ElMessage({
        message: '请输入内容',
        type: 'warning',
    })
}
const open4 = () => {
    ElMessage.error('注册失败，请检查')
}
onMounted(() => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        onSubmit()
    }
  };
 
  window.addEventListener('keypress', handleKeyPress);
 
  // 在组件卸载时移除事件监听器
  onUnmounted(() => {
    window.removeEventListener('keypress', handleKeyPress);
  });
});
const onSubmit = () => {
    if (formLabelAlign.username != '' && formLabelAlign.password != '' && formLabelAlign.per_password != '') {
        if (formLabelAlign.password == formLabelAlign.per_password) {
            counterStore.inFod = { username: formLabelAlign.username, password: formLabelAlign.password }
            open1()
            router.push('/sms/')
        } else {
            open2()
        }

    } else {
        open3()
    }
    
}
</script>
<style scoped>
.Sign {
    width: 100%;
    height: 100vh;
    background-image: url('../../public/image/bg.740c408c.png');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    width: 50%;
    height: 70%;
    min-width: 1000px;
    background-image: url('../../public/image/form-bg.d3ec8947.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 60px;
}

.mins {
    width: 35%;
    height: 80%;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mins H2 {
    box-sizing: border-box;
    padding: 10% 0;
}

.foots {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10%;
    justify-content: flex-end;
}
</style>
<style>
.el-form {
    width: 80%;
}
</style>