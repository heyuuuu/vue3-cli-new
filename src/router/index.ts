import { createRouter, createWebHistory } from "vue-router";
import RadioRoutes from "src/pages/radio/route"

// 所有路由列表
const routes: Array<RouterItem> = [
  ...RadioRoutes
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
