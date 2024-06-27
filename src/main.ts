import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

window.onerror = function(e){ console.log(['https://stackoverflow.com/search?q=[js]+'+e])}  //抛出错误 可在stackoverflow上面搜索查询
createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
