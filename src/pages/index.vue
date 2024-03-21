<template>
  <div class="common-layout" style="width: 100%; height: 100%">
    <el-container style="width: 100%; height: 100%">
      <el-aside width="100">
        <el-menu style="height: 100%; border: 0" :unique-opened="true" active-text-color="#fff"
          background-color="#1A1C26" text-color="#ccc" default-active="/sms/" class="el-menu-vertical-demo"
          :collapse="isCollapse" @open="handleOpen" @close="handleClose" :router="true">
          <el-menu-item index="/sms/" style="height: 80px">
            <el-icon>
              <img v-if="isCollapse" style="display: block; width: 50px; height: 50px"
                src="../../public/image/huaji.ico" alt="" /></el-icon>
            <template #title><img v-if="!isCollapse" style="display: block; width: 100px; height: 100px"
                src="../../public/image/huaji.jpg" alt="" /></template>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <UserFilled />
              </el-icon>
              <span>账号管理</span>
            </template>
            <el-menu-item index="homeUser">
              <el-icon>
                <Avatar />
              </el-icon>
              我的账户</el-menu-item>
            <el-menu-item index="passUser">
              <el-icon>
                <Edit />
              </el-icon>修改密码</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <ChatDotSquare />
              </el-icon>
              <span>发送中心</span>
            </template>
            <el-menu-item index="SMS">
              <el-icon>
                <Position />
              </el-icon>短信发送</el-menu-item>
            <el-menu-item index="sendRecord">
              <el-icon>
                <Memo />
              </el-icon>提交记录</el-menu-item>
            <el-menu-item index="submitRecord">
              <el-icon>
                <Message />
              </el-icon>发送记录</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <Share />
              </el-icon>
              <span>接码中心</span>
            </template>
            <el-menu-item index="API_Buy">
              <el-icon>
                <ShoppingCart />
              </el-icon>API购买</el-menu-item>
            <el-menu-item index="PurchaseHistory">
              <el-icon>
                <MessageBox />
              </el-icon>接码记录</el-menu-item>
            <el-menu-item index="ReceivingRecord">
              <el-icon>
                <DocumentAdd />
              </el-icon>购买记录</el-menu-item>
            <el-menu-item index="API_manage">
              <el-icon>
                <Setting />
              </el-icon>API管理</el-menu-item>
            <el-menu-item index="API_transfer">
              <el-icon>
                <User />
              </el-icon>API过户</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <Coin />
              </el-icon>
              <span>财务管理</span>
            </template>
            <el-menu-item index="Details">
              <el-icon>
                <CreditCard />
              </el-icon>
              财务明细</el-menu-item>
            <el-menu-item index="recharge">
              <el-icon>
                <Wallet />
              </el-icon>充值</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1a1c26;
            color: #ccc;
          ">
          <div style="
              height: 100%;
              display: flex;
              width: 40px;
              justify-content: center;
              align-items: center;
              font-size: 25px;
            ">
            <el-icon v-if="isCollapse" @click="isCollapse = false">
              <Fold />
            </el-icon>
            <el-icon v-else @click="isCollapse = true">
              <Expand />
            </el-icon>
          </div>
          <div style="display: flex; justify-content: center; align-items: center">
            <el-button type="primary" round style="margin-right: 30px" @click="recharge">充值</el-button>
            <el-dropdown>
              <el-avatar :size="50" src="../../public/image/bg.740c408c.png" />
              <template #dropdown>
                <el-dropdown-menu>
                  <router-link to="/sms/homeUser">
                    <el-dropdown-item><el-icon>
                        <Avatar />
                      </el-icon>Action 1</el-dropdown-item>
                  </router-link>
                  <el-dropdown-item>可用金额：$0.00</el-dropdown-item>
                  <el-dropdown-item>冻结金额：$0.00</el-dropdown-item>
                  <el-dropdown-item>总金额：$0.00</el-dropdown-item>
                  <router-link to="/sms/">
                    <el-dropdown-item>
                      <el-icon>
                        <House />
                      </el-icon>首页</el-dropdown-item>
                  </router-link>
                  <el-dropdown-item @click="EndLog"><el-icon>
                      <SwitchButton />
                    </el-icon>退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component" />
            </transition>
          </router-view>
          <!-- <transition name="slide-fade">
                        <router-view />
                    </transition> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
const isCollapse = ref(true);
import { ref } from "vue";
import router from "../router";
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
};
const EndLog = () => {
  sessionStorage.removeItem("counter");
  router.push("/sms/login");
};
const recharge = () => {
  router.push("/sms/recharge");
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
  /* ChromeSafari */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* transition 过渡效果 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
