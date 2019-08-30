const moment = require("moment-timezone")

const AppConfig = require("../config/AppConfig")

const Moment = moment().locale(AppConfig.LOCALE).tz(AppConfig.TIME_ZONE)

module.exports = Moment