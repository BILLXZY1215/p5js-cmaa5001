'use strict'

const { Controller } = require('egg')

class HomeController extends Controller {
	async index() {
		const { ctx } = this
		ctx.body = 'hi, egg'
	}
	async getStatus() {
		const { ctx, service } = this
		const res = await service.home.getStatus()
		ctx.status = 200
		ctx.body = res
	}
}

module.exports = HomeController
