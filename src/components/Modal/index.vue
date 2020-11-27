<template>
	<div class="mask" :class="[maskClass,{'show': isShow},isShow ? showClass : hideClass]" >
		<div class="container" :class="[containerClass]">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import main from "./index"
export default main
</script>
<style scoped lang="scss">
	@import "./index.scss";
</style>