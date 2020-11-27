import { store } from "src/store"

export function Loading(status: boolean){
	store.commit("loading",status)
}

export default {
	Loading
}