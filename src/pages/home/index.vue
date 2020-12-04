<template>
	<div class="container">
		<div class="nav" />
		<div class="head" />
		<!-- <Report /> -->
		<p>{{inputContent}}</p>
		<Authorize :onSuccess="loginSuccess" class="flex">Login</Authorize>
		<p>{{state.content}}</p>
		<div class="flex baseline">
			<img :src="modelImg" />
			<span>word!</span>
		</div>
		<div>
			<span @click="goReact">go react</span>
		</div>
		<div>
			<span @click="goUser">go user</span>
		</div>
		<div>
			<input @input="GetContent" v-model="inputContent" />
		</div>
	</div>
</template>
<script lang="ts">
import Home from "./index"
export default Home
</script>
<style scoped lang="scss">
	@import './index.scss'
</style>