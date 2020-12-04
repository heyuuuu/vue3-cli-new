import Request , { AxiosRequestConfig } from "./request"

export class RequestBang<DataProps = any> extends Request<ResponseDataProps<DataProps>> {
	protected transfromRequestBeforeConfig(config: AxiosRequestConfig): AxiosRequestConfig {
		config.headers = {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		}
		return config
	}
	protected checkSuccessStatus(data: ResponseDataProps<DataProps>): boolean{
		return data.state === 0
	}
}