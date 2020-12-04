import { store } from "src/store"

const tools = {
	// 控制展现加载等待
	Loading(status: boolean){
		store.commit("loading",status)
	}
}

export default tools