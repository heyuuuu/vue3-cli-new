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
				args[0].BRANCH_ENV = JSON.stringify(branch_env)
				args[0].BRANCH_CONFIG = JSON.stringify(BRANCH_CONFIG)
				return args
			})
		config.resolve.alias.set('src', path.join(__dirname,"src"))
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [require("autoprefixer"),px2rem({remUnit: 75})]
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
	},
	devServer: {
		allowedHosts: ["test2.duia.com"]
	}
};
