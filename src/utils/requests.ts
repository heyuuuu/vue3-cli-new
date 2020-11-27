import Request from "./request"

export class RequestBang<DataProps = any> extends Request<ResponseDataProps<DataProps>> {
	protected __init(): void{
		this.$defaultHeaders = {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		}
	}
	protected checkSuccessStatus(data: ResponseDataProps<DataProps>): boolean{
		return data.state === 0
	}
}