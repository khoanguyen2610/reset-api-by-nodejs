import logger from "../utils/logger"

const loggerRequest = (req, res, next) => {
	logger.info({
		time: new Date().toString(),
		path: req.url,
		header: req.headers,
		body: req.body,
		ip: req.ip
	})
	next()
}

export default loggerRequest