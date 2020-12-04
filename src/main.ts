import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import "lib-flexible"

const app = createApp(App)
app.use(router).use(store).mount("#app");