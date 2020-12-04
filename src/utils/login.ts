import Cookie from "js-cookie"

const Login = {
	// 前往登录页面
	open() {
		window.location.href = BRANCH_CONFIG.loginAddress + "/wap?returnUrl=" + encodeURIComponent(window.location.href)
	},
	// 通过cookie判断是否登录
	GetStatus(): boolean{
		return Cookie.get("d_t") ? true : false
	},
	// 检测登录状态
	check(success?: () => void){
		if(Login.GetStatus()){
			success && success()
		}else{
			Login.open()
		}
	}
}

export default Login