<template>
	<Modal :isShow="status" :maskClass="'toast-animation-before'" :showClass="'toast-animation-after'">
		<div class="toast-container">
			<slot :message="state.message">
				<div>
					<p v-for="(content,index) in state.message" :key="index">{{content}}</p>
				</div>
			</slot>
		</div>
	</Modal>
</template>
<script lang="ts">
import main from "./index"
export default main
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>