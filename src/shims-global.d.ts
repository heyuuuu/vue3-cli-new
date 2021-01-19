declare type OBJ = Record<string|number,any>

declare type ApiDomainItem = "bang" | "tuPath"

declare const BRANCH_ENV: "dev" | "test" | "rd" | "pro"

declare const BRANCH_CONFIG: Record<ApiDomainItem,string>

declare interface ResponseDataProps<DataProps = any> {
	state: number
	stateInfo: string
	resInfo: DataProps
}

declare interface RouterItem {
  	name: string
	path: string
	component: (() => Promise<typeof import("*.vue")>) | import("vue").DefineComponent | any
	props?(route: OBJ): OBJ
}