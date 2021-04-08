module.exports = () => {
	return (req, res, next) => {
		const err = new Error("This route does not exists.")
		err.statusCode = 404
		next(err)
	};
}