import { defineComponent , ref , reactive , watch , onUnmounted } from "vue"
import Modal from "../Modal/index.vue"

interface ToastModalState {
	next?: number
	timestamp?: number
	message: string[]
	callback?: () => void
}

export default defineComponent({
	name: "toast",
	props: {
		module: Object,
		timeout: {
			type: Number,
			default: 1000
		}
	},
	components: { Modal },
	setup(props){
		let timeout: number
		const status = ref(false)
		const state = reactive<ToastModalState>({
			timestamp: props.module?.state.timestamp,
			message: []
		})
		const transition = () => {
			clearTimeout(timeout)
			status.value =  true
			timeout = setTimeout(() => {
				status.value = false
				state.message = []
				if(state.callback){
					state.callback()
					state.callback = undefined
				}
			}, props.timeout)
		}
		const destroy = () => {
			status.value = false
			state.callback = undefined
			state.message = []
			clearTimeout(timeout)
		}
		watch(props, (old,now) => {
			if(now.module){
				const { timestamp , message , callback } = now.module.state
				if(state.timestamp !== timestamp){
					state.message = message
					state.timestamp = timestamp
					state.callback = callback
					transition()
				}else{
					destroy()
				}
			}
		})
		onUnmounted(()=>{
			destroy()
		})
		return {
			status,
			state
		}
	}
})

export function ToastModal(){
	const state = reactive<ToastModalState>({
		message: []
	})
	const updateState = () => {
		state.timestamp = new Date().valueOf()
	}
	const message = (content: string | string[],callback?: () => void) => {
		state.message = typeof content === "string" ? [content] : content
		state.callback = callback
		updateState()
	}
	const destroy = () => {
		state.next = new Date().valueOf()
	}
	return {
		state,
		destroy,
		message,
		updateState
	}
}