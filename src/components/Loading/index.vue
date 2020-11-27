<template>
	<Modal :isShow="isLoading" :maskClass="'maskContainer'" :hideClass="'hideClass'" >
		<div>加载中</div>
	</Modal>
</template>
<script>
import Controller from "./index"
export default Controller
</script>
<style scoped lang="scss">
	@import "./index.scss";
</style>