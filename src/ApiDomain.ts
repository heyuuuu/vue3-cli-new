type Item = Record<ApiDomainItem,string>

const dev: Record<ApiDomainItem,string> = {
	bang: "//bang.test.duia.com",
	tuPath: "//tu.test.duia.com"
}
const test: Item = {
	bang: "//bang.test.duia.com",
	tuPath: "//tu.test.duia.com"
}
const rd: Item = {
	bang: "//bang.test.duia.com",
	tuPath: "//tu.test.duia.com"
}
const pro: Item = {
	bang: "//bang.test.duia.com",
	tuPath: "//tu.test.duia.com"
}

// 所有的配置列表
const DomainList: Record<typeof $BRANCH_ENV,Item> = {dev,test,rd,pro}
// 环境常量
const BRANCH_ENV = $BRANCH_ENV
// 环境配置
const BRANCH_CONFIG = DomainList[BRANCH_ENV]

export default DomainList
export {
	BRANCH_ENV,
	BRANCH_CONFIG
}