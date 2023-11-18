const Service = require('egg').Service
class HomeService extends Service {
	async getStatus() {
		const res = await this.app.mysql.select('game')
		console.log(res)
		return res[0].status
	}
	async postStatus(status) {
		const row = {
			id: 1,
			status: status,
		}
		const res = await this.app.mysql.update('game', row)
		console.log(res)
		return res.affectedRows === 1
	}
	async getPlayerValue(player) {
		const res = await this.app.mysql.select('game')
		if (player == 1) {
			return res[0].p1
		} else {
			return res[0].p2
		}
	}
	async postPlayerValue(player, value) {
		let row
		if (player == 1) {
			row = {
				id: 1,
				p1: value,
			}
		} else {
			row = {
				id: 1,
				p2: value,
			}
		}
		const res = await this.app.mysql.update('game', row)
		console.log(res)
		return res.affectedRows === 1
	}
}
module.exports = HomeService
