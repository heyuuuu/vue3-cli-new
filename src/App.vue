<template>
<div>
	<van-overlay :show="loading" >
		<div class="wrapper">
			<van-loading />
		</div>
	</van-overlay>
	<router-view />
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { mapState } from "vuex"
import { Tools } from "./utils"
import $router from "./router"

export default defineComponent({
	setup(){
		$router.beforeEach((to, from, next) => {
			Tools.Loading(true)
			next()
		})
	},
	computed: mapState(['loading'])
})
</script>
<style lang="scss">
	html,body{
		margin: 0;
		padding: 0;
	}
	p{
		margin: 0;
		padding: 0;
	}
	.flex{
		display: flex;
		&-full{
			flex: 1
		}
		&.baseline{
			align-items: center;
		}
	}
</style>
<style scoped>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>