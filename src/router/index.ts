import { createRouter , createWebHistory } from "vue-router";
import Home from "src/pages/home/index.vue"
const UserView = () => import("src/pages/user/index.vue")
const ReactView = () => import("src/pages/react/index.vue")

// 所有路由列表
const routes: Array<RouterItem> = [
  {
    path: "/",
    name: "home",
		component: Home,
		props: route => ({name: route.query.name})
  },
  {
    path: "/react/:id",
    name: "react",
    component: ReactView
	},
	{
		path: "/user",
		name: "user",
		component: UserView
	}
];

// 创建路由实例
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
