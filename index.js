// 引入vue
import Vue from 'vue'
import Vuex from 'vuex'
// 引入vue-router路由插件
import VueRouter from 'vue-router'
import DefaultPage from './components/404.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import User from './components/User.vue'
import UserProfile from './components/user/profile.vue'
import UserPost from './components/user/post.vue'
import UserInfo from './components/user/info.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 12
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        { path: '*', component: DefaultPage },
        {
            path: '/user/:id', component: User, children: [
                {
                    path: '',
                    component: UserInfo
                },
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'post',
                    component: UserPost
                }
            ]
        },
        { path: '/about', component: About },

    ]
})
// 加入到vue实例中
new Vue({
    el: '#app',
    store,
    router: router
})
