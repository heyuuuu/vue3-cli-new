import { createApp } from "vue"
import router from "./router"
import { store } from "./store"
import Vant from "vant"
import App from "./App.vue"
import "lib-flexible"
import "vant/lib/index.css"
import "./registerServiceWorker"

const app = createApp(App)
app.use(router).use(store).use(Vant).mount("#app")