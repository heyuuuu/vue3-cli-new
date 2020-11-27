const path = require("path")
const px2rem = require("postcss-px2rem")
const CONFIG = require("./build/branch.config")
const { NODE_ENV , branch_env } = process.env
const BRANCH_CONFIG = CONFIG[branch_env]

module.exports = {
  publicPath: NODE_ENV === "production" ? "/" : "/",
	outputDir: BRANCH_CONFIG.outputDir,
	chainWebpack: config => {
		config
			.plugin('define')
			.tap(args => {
					args[0].$BRANCH_ENV = JSON.stringify(branch_env)
					return args
			})
		config.resolve.alias.set('src', path.join(__dirname,"src"))
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [px2rem({remUnit: 75})]
			}
		}
	},
	pwa: {
		iconPaths: {
			favicon32: 'favicon.ico',
			favicon16: 'favicon.ico',
			appleTouchIcon: 'favicon.ico',
			maskIcon: 'favicon.ico',
			msTileImage: 'favicon.ico'
		}
	}
};
