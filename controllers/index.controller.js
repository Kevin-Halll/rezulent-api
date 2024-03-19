class IndexController {
	static index = (req, res) => {
		res.json({
			project_name: 'Rezulent-HRM',
			version: 'v0.1.0',
			author: 'Kevin Hall'
		})
	}
}

module.exports = IndexController
