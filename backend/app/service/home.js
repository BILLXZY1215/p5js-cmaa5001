const Service = require('egg').Service
class HomeService extends Service {
	async getStatus() {
		const res = await this.app.mysql.select('game')
		console.log(res)
		return res[0].status
	}
}
module.exports = HomeService
