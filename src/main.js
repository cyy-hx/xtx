import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

import './assets/main.css'

//引入懒加载指令插件并且注册
import lazyPlugin from '@/directives'

import {componentPlugin} from '@/components'



import { ElInfiniteScroll } from 'element-plus'
const app = createApp(App)
app.directive('infinite-scroll', ElInfiniteScroll)




app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

