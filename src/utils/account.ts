import "duia-wapui/lib/theme-chalk/base.css"
import "duia-wapui/lib/theme-chalk/code-login.css"
import duiaWapui from "duia-wapui"

// 半屏登录
function Login(){
	duiaWapui.CodeLogin(BRANCH_ENV)
}

// 注销
function Logout(){
    console.log
}

// 检测是否登录
function IsLogin(): boolean{
    return false
}

export default {
    Login,
    Logout,
    IsLogin
}