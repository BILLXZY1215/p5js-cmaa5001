/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {})

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1700303598376_9520'

	config.security = {
		csrf: {
			enable: false,
		},
		domainWhiteList: ['http://localhost:3000'],
	}

	// add your middleware config here
	config.middleware = []

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	}

	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: '124.222.21.202',
			// 端口号
			port: '3306',
			// 用户名
			user: 'p5js',
			// 密码
			password: 's3RexyH5RBA7GCAE',
			// 数据库名
			database: 'p5js',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	}

	return {
		...config,
		...userConfig,
	}
}
