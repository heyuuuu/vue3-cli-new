<template>
  <div id="app">
		<Loading />
    <router-view />
  </div>
</template>
<script lang="ts">
import {
	getCurrentInstance
} from "vue"
import {
	Provider
} from "./utils"
import Loading from "./components/Loading/index.vue"
import $router from "./router"
export default {
	components: {Loading},
	setup(){
		console.log("ctx==============",$router)
		$router.beforeEach((to, from, next) => {
			Provider.Loading(true)
			next()
		})
	}
}
</script>
<style>
	html,body{
		margin: 0;
		padding: 0;
	}
</style>