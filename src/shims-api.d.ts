declare type ApiDomainItem = "bang" | "tuPath" 

declare interface ResponseDataProps<DataProps = any> {
	state: number
	stateInfo: string
	resInfo: DataProps
}