module.exports = app => {
	app.post('/status', (req, res) => {
		res.send({
			message: 'Your user was registered!',
		})
	})
}
