import Router from "src/router"
import $store from "src/store"
import { ref, reactive , defineComponent , inject , onMounted } from "vue"
import { Tools } from "src/utils"
import { Authorize , Report }  from "src/components"

import modelImg from "./images/003.png"

export default defineComponent({
	name: "home",
	props: ["name"],
	components: {Authorize,Report},
	data(){
		return {
			modelImg
		}
	},
	setup(props) {
		console.log("setup----word!")
		$store.dispatch("GetUserInfo",{id: "10086"})
		const inputContent = ref(props.name)
		const message = inject<any>("message")
		const state = reactive({
			content: "",
			msg: ""
		})
		function goReact() {
			Router.push({name: "react",params: {id: "1000958"}})
		}
		function goUser(){
			Router.push({name: "user"})
		}
		function GetContent(ev: any){
			state.content = ev.target.value
			inputContent.value = ev.target.value
		}
		function loginSuccess(){
			message && message(["请稍后","正在转接中"])
		}
		onMounted(()=>{
			Tools.Loading(false)
		})
		return {
			state,
			status,
			goUser,
			goReact,
			GetContent,
			inputContent,
			loginSuccess
		}
	}
})