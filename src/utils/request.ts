import Axios, { AxiosRequestConfig , AxiosPromise , AxiosResponse } from "axios"

type ResultTypeProps = "success" | "error" | "finally" | "catch"
type Callback = (result: any) => void
type ResultCallback<ResponenseDataProps> = (result: ResponenseDataProps) => void

interface RequestConfigProps extends AxiosRequestConfig{
	apiDomainName?: ApiDomainItem
}

interface ISubscribeProiseResultType {
	type: ResultTypeProps
	result: any
}

class RequestClass<ResponenseDataProps> {
	// 获取返回的respones
	public $response: AxiosResponse<ResponenseDataProps>
	// 请求实例
	private $xhr: AxiosPromise<ResponenseDataProps>
	// 订阅中心
	private $subscribe: Promise<ISubscribeProiseResultType>
	// 判断是否成功返回
	private checkSuccessStatus = (result: ResponenseDataProps) => true || result

	constructor(params: RequestConfigProps) {
		this.XMLHttpRequest(this.transformRequestPramas(params))
	}
	// 处理请求配置
	private transformRequestPramas(config: RequestConfigProps): AxiosRequestConfig{
		// 默认为bang域名
		const { apiDomainName = "bang" , ...params } = config
		// 设置默认的baseUrl
		params.baseURL = params.baseURL || BRANCH_CONFIG[apiDomainName]
		return params
	}
	private XMLHttpRequest(params: AxiosRequestConfig) {
		this.$xhr = Axios(params)
		this.$subscribe = new Promise(resolve => {
			this.$xhr.then(response => {
				this.$response = response
				if(response.status === 200){
					resolve({
						type: this.checkSuccessStatus(response.data) ? "success" : "error",
						result: response.data
					})
				}else{
					resolve({type: "catch",result: response})
				}
			}).catch(e => {
				resolve({type: "catch",result: e})
			}).finally(() => {
				// 这里是最后的回调
			})
		})
	}
	private subscribe(type: ResultTypeProps,callback: ResultCallback<any>){
		this.$subscribe = this.$subscribe.then( res => {
			type === res.type && callback(res.result)
			return res
		})
	}
	public state(callback: (result: ResponenseDataProps) => boolean):this {
		this.checkSuccessStatus = callback
		return this
	}
	public success(callback: ResultCallback<ResponenseDataProps>):this {
		this.subscribe("success",callback)
		return this
	}
	public error(callback: ResultCallback<ResponenseDataProps>):this {
		this.subscribe("error",callback)
		return this
	}
	public finally(callback: Callback):this {
		this.$subscribe.finally(() => callback(this.$response))
		return this
	}
	public catch(callback: ResultCallback<Error>):this {
		this.subscribe("catch",callback)
		return this
	}
	public async():Promise<any> {
		return this.$subscribe
	}
}

// 合并对象
function merge(target: OBJ,mixTarget: OBJ): OBJ{
	const keys: Array<string> = Array.from(new Set(Object.keys(target).concat(Object.keys(mixTarget))))
	keys.map(k => {
		if(mixTarget[k] instanceof Function){
			target[k] = mixTarget[k]
		}else if(mixTarget[k] instanceof Object && target[k]){
			target[k] = merge(target[k],mixTarget[k])
		}else if(mixTarget[k]){
			target[k] = mixTarget[k]
		}
	})
	return target
}

function Request<ResponenseDataProps = any>(params: RequestConfigProps): RequestClass<ResponenseDataProps>{
	return new RequestClass<ResponenseDataProps>(params)
}

function createRequest<ResponenseDataProps = any>(defaultParams: RequestConfigProps) {
	return function(params: RequestConfigProps): RequestClass<ResponenseDataProps>{
		const mixParams = merge(params,defaultParams)
		return Request<ResponenseDataProps>(mixParams)
	}
}

export default Request

export { createRequest }