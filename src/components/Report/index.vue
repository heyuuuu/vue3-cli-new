<template>
	<div>
		<Modal :maskClass="'report-container'" isShow>
			<p class="report-title">举报描述</p>
			<div>
				<textarea class="report-content"></textarea>
				<p class="report-num">200/200</p>
			</div>
		</Modal>
	</div>
</template>
<script lang="ts">
import main from './index'
export default main
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>