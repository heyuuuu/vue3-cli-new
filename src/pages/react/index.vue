<template>
  <div>
		<Toast :module="toast">
			<template #default="state">
				<div>000<span v-for="(msg,index) in state.message" :key="index">{{msg}}</span>====</div>
			</template>
		</Toast>
		<div class="home"></div>
		<span @click="comfire">toast</span>
  </div>
</template>

<script>
import ReactView from "./index"
export default ReactView
</script>
<style scoped lang="scss">
	@import './index.scss' 
</style>