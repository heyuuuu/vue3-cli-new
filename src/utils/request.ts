import Axios, { AxiosRequestConfig, AxiosPromise , AxiosResponse } from "axios"
import { BRANCH_CONFIG } from 'src/ApiDomain'

type ResultTypeProps = "success" | "error" | "finally" | "catch"
type Callback = (result: any) => void
type ResultCallback<ResponenseDataProps> = (result: ResponenseDataProps,done: () => void) => void | false

interface Subscribe {
	type: ResultTypeProps
	res: any
	callback: Record<string,Callback>
	isFinally: boolean
}

interface RequestConfigProps extends AxiosRequestConfig{
	apiDomainName?: ApiDomainItem
}

class Request<ResponenseDataProps = any> {
	// 获取返回的respones
	public $response: AxiosResponse<ResponenseDataProps>
	// 配置默认的头部
	protected $defaultHeaders: Record<string,string>
	// 请求实例
	private $xhr: AxiosPromise<ResponenseDataProps>
	// 订阅中心
	private $subscribe: Partial<Subscribe> = {}
	// 是否立即将状态更改为完成
	private $isDone: boolean
	constructor(params: RequestConfigProps) {
		this.__init()
		this.XMLHttpRequest(this.transformRequestPramas(params))
	}
	// 在该函数中更改基类属性
	protected __init(): void{
		return 
	}
	// 发起请求前处理配置
	protected transfromRequestBeforeConfig(params: AxiosRequestConfig):AxiosRequestConfig {
		return params
	} 
	// 判断是否成功返回
	protected checkSuccessStatus(result: ResponenseDataProps):boolean {
		return result ? true : false
	}
	// 处理请求配置
	protected transformRequestPramas(config: RequestConfigProps): AxiosRequestConfig{
		// 默认为bang域名
		const { apiDomainName = "bang" , ...params } = config
		// 设置默认的baseUrl
		params.baseURL = params.baseURL || BRANCH_CONFIG[apiDomainName]
		// 合并header
		params.headers = {...this.$defaultHeaders||{},...config.headers||{}}
		// 是否对配置进行整体处理
		return this.transfromRequestBeforeConfig(params)
	}
	private XMLHttpRequest(params: AxiosRequestConfig) {
		this.$xhr = Axios(params)
		this.$xhr.then(response => {
			this.$response = response
			if(response.status === 200){
				this.subscribeSetSatus(this.checkSuccessStatus(response.data) ? "success" : "error",response.data)
			}else{
				this.subscribeSetSatus("catch",response)
			}
		}).finally(() => {
			this.interceptDone()
		}).catch(e => {
			this.subscribeSetSatus("catch",e)
		})
	}
	private subscribeSetSatus(type: ResultTypeProps, res = this.$subscribe.res){
		this.$subscribe.type = type
		this.$subscribe.res = res
		this.subscribeNext()
		return this
	}
	private subscribeSetCallback(type: ResultTypeProps,callback: Callback){
		if(this.$subscribe.callback){
			this.$subscribe.callback[type] = callback
		}else{
			this.$subscribe.callback = {[type]: callback}
		}
		this.subscribeNext()
		return this
	}
	private subscribeNext(){
		const { type , res , callback } = this.$subscribe
		if(res && type && callback?.[type]) {
			callback[type](res)
		}
	}
	private interceptDone(){
		this.$isDone && this.done()
	}
	public done():this {
		this.subscribeSetSatus("finally")
		return this
	}
	public success(callback: ResultCallback<ResponenseDataProps>):this {
		this.subscribeSetCallback("success",res => {
			this.$isDone = callback(res,() => this.done()) !== false
			this.interceptDone()
		})
		return this
	}
	public error(callback: ResultCallback<ResponenseDataProps>):this {
		this.subscribeSetCallback("error",res => {
			this.$isDone = callback(res,() => this.done()) !== false
			this.interceptDone()
		})
		return this
	}
	public finally(callback: Callback):this {
		this.subscribeSetCallback("finally", res => {
			if(!this.$subscribe.isFinally){
				this.$subscribe.isFinally = true
				callback(res)
			}
		})
		return this
	}
	public catch(callback: ResultCallback<Error>):this {
		this.subscribeSetCallback("catch",res => {
			this.$isDone = callback(res,() => this.done()) !== false
			this.interceptDone()
		})
		return this
	}
	public async():AxiosPromise {
		return this.$xhr
	}
}

export default Request