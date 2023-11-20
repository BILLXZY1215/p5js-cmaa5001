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
	async postStatus() {
		const { ctx, service } = this
		const status = ctx.params.status
		const res = await service.home.postStatus(status)
		ctx.status = 200
		ctx.body = res
	}
	async getPlayerValue() {
		const { ctx, service } = this
		const player = ctx.params.player
		const res = await service.home.getPlayerValue(player)
		ctx.status = 200
		ctx.body = res
	}
	async postPlayerValue() {
		const { ctx, service } = this
		const player = ctx.params.player
		const value = ctx.params.value
		const res = await service.home.postPlayerValue(player, value)
		ctx.status = 200
		ctx.body = res
	}
	async clearValue() {
		const { ctx, service } = this
		const res = await service.home.clearValue()
		ctx.status = 200
		ctx.body = res
	}
}

module.exports = HomeController
