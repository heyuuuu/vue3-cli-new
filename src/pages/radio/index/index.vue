<template>
    <div class="container">
        <van-button type="primary" @click="alert">轻提示</van-button>
        <van-button type="success" @click="Login">登录</van-button>
    </div>
</template>
<script lang="ts">
import { defineComponent , onMounted } from 'vue'
import { Tools , Account } from "src/utils"
import { Toast } from "vant"
export default defineComponent({
    setup(){
        onMounted(() => {
            console.log("this is mounted!")
            Tools.Loading(false)
        })
        function alert(){
            Toast.success('轻提示')
        }
        return {
            alert,
            Login: Account.Login
        }
    }
})
</script>
<style scoped lang="scss">
.container{
    width: 750px;
    height: 100px;
}
</style>