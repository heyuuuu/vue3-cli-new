<template>
  <div id="app">
		<Toast :module="toast" />
		<router-view />
		<Loading />
  </div>
</template>
<script lang="ts">
import main from "./App"
export default main
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