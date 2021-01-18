import { createStore } from "vuex";

export const store = createStore({
  state: {
		loading: true,
		userInfo: null
	},
	// 用于同步 commit
  mutations: {
		loading(state,status){
			state.loading = status
		}
	},
	// 用于异步 dispatch
  actions: {
		GetUserInfo({commit,state},params){
			console.log("GetUserInfo",params,state.userInfo,commit)
		}
	},
	// 模块化
  modules: {},
});

export default store
