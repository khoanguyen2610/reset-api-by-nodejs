import dotenv from "dotenv"
dotenv.config()

const AppConfig = {
	PORT: process.env.PORT || 8080
}

export default AppConfig
