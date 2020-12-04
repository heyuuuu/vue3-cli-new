const BRANCH_CONFIG = {
	dev: {
		outputDir: "dist",
		bang: "//bang.test.duia.com",
		tuPath: "//tu.test.duia.com",
		loginAddress: "//login.test.duia.com"
	},
	test: {
		outputDir: "dev",
		bang: "//bang.test.duia.com",
		tuPath: "//tu.test.duia.com",
		loginAddress: "//login.test.duia.com"
	},
	rd: {
		outputDir: "rd",
		bang: "//bang.test.duia.com",
		tuPath: "//tu.test.duia.com",
		loginAddress: "//login.test.duia.com"
	},
	pro: {
		outputDir: "pro",
		bang: "//bang.test.duia.com",
		tuPath: "//tu.test.duia.com",
		loginAddress: "//login.test.duia.com"
	}
}

module.exports = BRANCH_CONFIG