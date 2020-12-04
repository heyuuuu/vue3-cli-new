import { Tools } from "src/utils"
import { RequestBang } from "src/utils/requests"
import { Toast , ToastModal} from "src/components"

export default {
  name: "react",
  components: {Toast},
	setup(){
		const toast = ToastModal()
		new RequestBang({
			url: "/web/ad/g-ads",
			method: "post",
			data: {gid: 2}
		})
		.success(res => {
			console.log("success",res)
			// return false
		})
		.error(res => {
			console.log("error",res)
		})
		.catch(e => {
			// done()
			console.log("catch",e)
		})
		.finally(res => {
			Tools.Loading(false)
			console.log(res,"finnnn")
		})
		.async()
		console.log("===================")
		const comfire = () => {
			toast.message("xxxxxxxxx")
		}
		return {
			toast,
			comfire
    };
	}
};