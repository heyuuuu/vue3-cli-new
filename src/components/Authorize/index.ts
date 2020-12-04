import { Login } from "src/utils"

interface IProps {
	onSuccess?(): void
}

export default {
	props: {
		onSuccess: {
			type: Function
		}
	},
	setup(props: IProps){
		function onClickChcek(event: Event){
			event.preventDefault()
			Login.check(props.onSuccess)
		}
		return {
			onClickChcek
		}
	}
}