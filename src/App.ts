import { defineComponent , provide } from "vue"
import { Tools } from "./utils"
import { Loading , Toast , ToastModal } from "./components"
import $router from "./router"

export default defineComponent({
	name: "App",
	components: {Loading,Toast},
	setup(){
		const toast = ToastModal()
		$router.beforeEach((to, from, next) => {
			toast.destroy()
			Tools.Loading(true)
			next()
		})
		provide("message",toast.message)
		return {
			toast
		}
	}
})