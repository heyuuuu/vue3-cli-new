import {
	onMounted
} from "vue"
import { Provider } from "src/utils"
import { RequestBang } from "src/utils/requests"
import ReactInfo from "src/components/ReactInfo.vue"

export default {
  name: "react",
  components: {
    ReactInfo
	},
	setup(): any {
		onMounted(() => {
			new RequestBang({
				url: "/web/ad/g-ads",
				method: "post",
				data: {gid: 2}
			})
			.success((res,done) => {
				setTimeout(() => {
					console.log(res.resInfo)
					done()
				}, 3000);
				return false
			})
			.finally(res => {
				Provider.Loading(false)
				console.log(res,"finnnn")
			})
			.catch((e,done) => {
				// done()
				console.log(e.message)
			})
		})
		return {

    };
	}
};