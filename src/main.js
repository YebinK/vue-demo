import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //store 안에 index를 가져온다. (파일명이 다르면 명시해주어야 함!)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')