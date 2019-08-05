
const { createLogger, format, transports } = require('winston');
const logger = createLogger({
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

module.exports = logger