import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import ApiDomain from "./ApiDomain"
import "lib-flexible"

const app = createApp(App)
app.config.globalProperties.$BRANCH_CONFIG = ApiDomain[$BRANCH_ENV]
// app.provide("$BRANCH_ENV",$BRANCH_ENV)
app.use(router).use(store).mount("#app");