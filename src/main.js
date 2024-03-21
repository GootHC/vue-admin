import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { getToken } from './utils/auth'
// 判断是否登录
router.beforeEach((to, trom, next) => {
    // document.title = to.meta.title;

    if (to.meta.meedLogin) {

        if (sessionStorage.getItem('counter') != null) {
            // console.log(sessionStorage.getItem('counter'));
            next()
        } else {
            next({ path: "/sms/login" })
        }
    } else {
        next()
    }
})
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(pinia).use(ElementPlus).mount('#app')
