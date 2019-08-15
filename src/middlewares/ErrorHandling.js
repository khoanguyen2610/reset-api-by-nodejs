import Logger from "../utils/Logger"

export default (err, req, res, next) => {
	Logger.log({
        level: "error",
        label: "INTERNAL_SERVER_ERROR",
        message: {
            time: new Date().toString(),
            path: req.url,
            header: req.headers,
            body: req.body,
            method: req.method,
            error: err.stack.toString(),
            ip: req.ip
        }
    })
    
    // Response data
    if (process.env.NODE_ENV === "production") {
        res.jsonError({
            code: 500,
            message: "Unexpected Error"
        })
    }
    res.jsonError({
        code: 500,
        message: err.message.toString(),
        errors: err.stack.toString()
    })
}
