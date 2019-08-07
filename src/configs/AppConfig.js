import dotenv from "dotenv"
dotenv.config()

const AppConfig = {
	PORT: process.env.PORT || 8080,

	// Logger Variable
	LOGGER_ENABLE_TRACKING: process.env.LOGGER_ENABLE_TRACKING || true,
	LOGGER_ENABLE_TRACKING_RESPONSE: process.env.LOGGER_ENABLE_TRACKING_RESPONSE || false,
	LOGGER_FILE_MAX_SIZE: process.env.LOGGER_FILE_MAX_SIZE || 2097152,
	LOGGER_FILE_MAX_FILES: process.env.LOGGER_FILE_MAX_FILES || 10,
}

export default AppConfig
