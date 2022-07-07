import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { setupStore } from "./router"
// 引入element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import globalRegister from "./global"
// css重置
import "normalize.css"
import "./assets/css/index.css"

const app = createApp(App)
// 刷新给vuex赋值
setupStore()
app.use(store)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(globalRegister)
app.mount("#app")
