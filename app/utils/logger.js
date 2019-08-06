
import { createLogger, format, transports } from "winston"
import moment from "moment"
import path from "path"

const logPath = path.join(__dirname, `../../logs/${moment().format('YYYY/MM/DD')}`)

const myFormat = format.json(({ level, message, label, timestamp }) => {
    return {
        timestamp,
        level,
		label,
		message
    }
});
   

export default createLogger({
    format: format.combine(
        format.json(),
        format.timestamp(),
        myFormat
    ),
    
    transports: [
        new transports.Console({
            format: format.prettyPrint()
        }),
        // Write all logs error (and below) to `error.log`
        new transports.File({
            filename: `${logPath}/erorr.log`,
            level: 'error'
        }),
        // Write to all logs with level `info` and below to `combined.log`
        new transports.File({
            filename: `${logPath}/combined.log`
        })
    ]
});