<template>
	<div @click="onClickChcek($event)">
		<slot />
	</div>
</template>
<script lang="ts">
import main from "./index"
export default main
</script>
<style scoped lang="scss">
	@import "./index.scss"
</style>