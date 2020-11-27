// 处理与app之间的交互

class WebViewBridge {
	public userAgent = window.navigator.userAgent
	public isDuiaApp: boolean
	private $isIos: boolean
	private $isAndroid: boolean
	private $version = ""
	constructor(){
		this.handleUserAgent()
	}
	private handleUserAgent(){
		this.isDuiaApp = this.userAgent.indexOf("duia") != -1
		this.$isIos = /ipad|iphone/i.test(this.userAgent)
		this.$isAndroid = /android/i.test(this.userAgent)
		const version = this.userAgent.match(/version=([\d.]+)/)
		if(version){
			this.$version = version[1]
		}
	}
	// 判断否是在app内
	public support(){
		console.log(this.$version)
		return this.isDuiaApp
	}
	// 版本比较
	public compareVersion(now: string,current = this.$version){
		console.log(now,current)
		return true
	}
	// 调用ios注册函数
	private callIos(name: string,params: any[]){
		console.log(name,params)
	}
	// 调用安卓注册函数
	private callAndroid(name: string,params: any[]){
		console.log(name,params)
	}
	// 调用app函数
	public dispatch(name: string,params: any){
		const am = params instanceof Array ? params : [params]
		if(this.$isIos){
			this.callIos(name,am)
		}
		if(this.$isAndroid){
			this.callAndroid(name,am)
		}
	}
}

const newWebViewBridge: WebViewBridge = new WebViewBridge

export default newWebViewBridge