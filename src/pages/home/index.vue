<template>
	<div class="container">
		<div class="nav" />
		<div class="head" />
		<p>{{inputContent}}</p>
		<p>this is Home</p>
		<p>{{state.content}}</p>
		<img :src="modelImg" />
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