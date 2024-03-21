// 路由
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Error from '../pages/Error.vue'
import Home from '../pages/index.vue'
import Login from '../pages/login.vue'
import Sign from '../pages/Sign.vue'
import Bodes from '../pages/bodes.vue'
import HomeUser from '../pages/user/homeUser.vue'
import PassUser from '../pages/user/passUser.vue'
import SMS from '../pages/SendCenter/SMS.vue'
import submitRecord from '../pages/SendCenter/submitRecord.vue' 
import sendRecord from '../pages/SendCenter/sendRecord.vue' 
import API_Buy from '../pages/API_Son/API_BUY.vue'
import API_manage from '../pages/API_Son/API_manage.vue'
import API_transfer from '../pages/API_Son/API_transfer.vue'
import PurchaseHistory from '../pages/API_Son/PurchaseHistory.vue'
import ReceivingRecord from '../pages/API_Son/ReceivingRecord.vue'
import Details from '../pages/finance/Details.vue'
import recharge from '../pages/finance/recharge.vue'



const routes = [
    {
        path: '/sms/',
        name: 'home',
        component: Home,
        meta: { meedLogin: true },
        children: [{
            path: '',
            name: 'Bodes',
            component: Bodes,
        },{
            path: 'homeUser',
            name: 'homeUser',
            component: HomeUser,
        },{
            path: 'passUser',
            name: 'passUser',
            component: PassUser,
        },{
            path: 'SMS',
            name: 'SMS',
            component: SMS,
        },{
            path: 'submitRecord',
            name: 'submitRecord',
            component: submitRecord,
        },{
            path: 'sendRecord',
            name: 'sendRecord',
            component: sendRecord,
        },{
            path: 'API_Buy',
            name: 'API_Buy',
            component: API_Buy,
        },{
            path: 'API_manage',
            name: 'API_manage',
            component: API_manage,
        },{
            path: 'API_transfer',
            name: 'API_transfer',
            component: API_transfer,
        },{
            path: 'PurchaseHistory',
            name: 'PurchaseHistory',
            component: PurchaseHistory,
        },{
            path: 'ReceivingRecord',
            name: 'ReceivingRecord',
            component: ReceivingRecord,
        },{
            path: 'Details',
            name: 'Details',
            component: Details,
        },{
            path: 'recharge',
            name: 'recharge',
            component: recharge,
        }
    ]
    }, {
        path: '/sms/login',
        name: 'login',
        component: Login,
    }, {
        path: '/sms/Sign',
        name: 'Sign',
        component: Sign,
    },
    {
        path: '/sms/:pathMatch(.*)',
        name: '/sms/404',
        component: Error
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router