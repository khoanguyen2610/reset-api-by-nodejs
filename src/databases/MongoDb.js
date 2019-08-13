import mongoose from "mongoose"


import MongoDbConfig from "../configs/MongoDbConfig"
import Logger from "../utils/Logger"

class MongoDb {
    async connectDb() {
        try {
            const DB_HOST = MongoDbConfig.DB_HOST || "127.0.0.1"
            const DB_PORT = MongoDbConfig.DB_PORT || "27017"
            const DB_USER = MongoDbConfig.DB_USER
            const DB_PASS = MongoDbConfig.DB_PASS
            const DB_NAME = MongoDbConfig.DB_NAME

            const uri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
            const options = {
                connectTimeoutMS: 10000,
                useNewUrlParser: true,
                useCreateIndex: true,
            }
            await mongoose.connect(uri, options)
            if( process.env.NODE_ENV !== "test") console.log("|>>>>>>>>>>>>>>>>>>>>>>> Connect Mongo Database Successfully")
        } catch (error) {
            Logger.log({
                level: "error",
                label: "MongoDb",
                message: {
                    time: new Date().toString(),
                    error: error
                }
            })
            if( process.env.NODE_ENV !== "test") console.log("|>>>>>>>>>>>>>>>>>>>>>>> Cannot Connect Mongo Database")
        }
    }
}

export default new MongoDb()