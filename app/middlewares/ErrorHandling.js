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
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send({
            sucess: false,
            message: "Unexpected Error"
        })
    }
    res.status(500).send({
        sucess: false,
        message: err.stack.toString()
    })
    
}
