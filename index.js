// 引入vue
import Vue from 'vue'
// 引入vue-router路由插件
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import User from './components/User.vue'


Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {path:'/user/:id',component:User}
    ]
})
// 加入到vue实例中
new Vue({
    el: '#app',
    router: router
})
