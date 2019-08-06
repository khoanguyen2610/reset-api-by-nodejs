import Logger from "../utils/Logger"

export default (req, res, next) => {
	// Parse Response body
	const write = res.write
	const end = res.end
	const chunks = []
  
	res.write = function newWrite(chunk) {
	  	chunks.push(chunk)
	  	write.apply(res, arguments)
	}
  
	res.end = function newEnd(chunk) {
	  	if (chunk) { chunks.push(chunk) }
	  	end.apply(res, arguments)
	}

	const objLogger = {
			level: "info",
			label: "Request Tracking",
			message: {
				time: new Date().toString(),
				path: req.url,
				header: req.headers,
				body: req.body,
				method: req.method,
				response: null,
				ip: req.ip
			}
		}

	// Write log when request finish
	res.once('finish', () => {
		objLogger.message.response = {
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
		}
		
		try {
			objLogger.message.response.body = JSON.parse(Buffer.concat(chunks).toString('utf8'))
		} catch {
			objLogger.message.response.body = Buffer.concat(chunks).toString('utf8')
		}
		Logger.log(objLogger)
	})
	next()
}
