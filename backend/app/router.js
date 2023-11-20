'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
	const { router, controller } = app
	router.get('/', controller.home.index)
	router.get('/getStatus', controller.home.getStatus)
	router.post('/postStatus/:status', controller.home.postStatus)
	router.get('/value/:player', controller.home.getPlayerValue)
	router.post('/value/:player/:value', controller.home.postPlayerValue)
	router.post('/value/clear', controller.home.clearValue)
}
