import Router from "src/router"
import $store from "src/store"
import { ref, reactive, onMounted } from "vue"
import { Provider } from "src/utils"

import modelImg from "./images/003.png"

export default {
	name: "home",
	props: ["name"],
	data(){
		return {
			modelImg
		}
	},
	setup(props: any) {
		$store.dispatch("GetUserInfo",{id: "10086"})
		const inputContent = ref(props.name)
		const state = reactive({
			content: ""
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
		onMounted(()=>{
			setTimeout(() => {
				console.log("===============onMounted")
				Provider.Loading(false)
			}, 1000);
		})
		return {
			state,
			goUser,
			goReact,
			GetContent,
			inputContent,
		}
	}
}