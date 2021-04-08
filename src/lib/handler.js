module.exports = {
	
	reply(message, data, status) {
		return { message, data, status };
	},

	request(controller){
		return async (req, res, next) => {
			try {
				const _res = await controller(req)
				if (_res.headers) {
					res.set(_res.headers)
				}
				if (_res.redirect) {
					return res.redirect(_res.redirect);
				}
				if (_res.json) {
					res.status(_res.statusCode || 200).json(this.reply(_res.message, _res.json, "success"))
				}
			} catch (e) {
				next(e)
			}
		}
	}

}