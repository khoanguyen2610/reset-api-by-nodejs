
import { createLogger, format, transports } from "winston"
const logger = createLogger({
    format: format.json(),
    transports: [
        new transports.Console({
            format: format.combine(
                format.timestamp(),
                format.colorize(),
            )
        }),
        new transports.File({
            filename: './logs/example-2.log'
        })
    ]
});

export default logger