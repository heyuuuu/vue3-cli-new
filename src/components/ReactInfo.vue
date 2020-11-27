<template>
  <div class="react">
		{{msg}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "hello react",
  props: {
    msg: String,
  },
  setup(props) {
		console.log(props)
  },
});
</script>

<style scoped lang="scss">

</style>
