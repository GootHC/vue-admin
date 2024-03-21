import { defineStore, createPinia } from 'pinia'

const useCounter = defineStore("counter", {

    state() {
        return {
            inFod: '',
        }

    },

    persist: {
        enabled: true,
        key: "counter",
        storage: sessionStorage,
    },
})

//暴露这个useCounter模块
export default useCounter