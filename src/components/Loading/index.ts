import {
	computed
} from "vue"
import $store from "src/store"
import Modal from "../Modal/index.vue"
export default {
	props: ["containerClass","contentClass"],
	components: { Modal },
	setup(){
		const isLoading = computed(() => {
			return $store.state.loading
		})
		console.log(isLoading)
		return {
			isLoading
		}
	}
}