import mongoose from "mongoose"

import Logger from "../utils/Logger"

class MongoDb {
    async connectDb() {
        try {
            const DB_HOST = process.env.DB_HOST || "127.0.0.1"
            const DB_PORT = process.env.DB_PORT || "27017"
            const DB_USER = process.env.DB_USER
            const DB_PASS = process.env.DB_PASS
            const DB_NAME = process.env.DB_NAME

            const uri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
            const options = {
                connectTimeoutMS: 10000,
                useNewUrlParser: true,
                useCreateIndex: true,
            }
            await mongoose.connect(uri, options)
            console.log("|=====================> Connect Mongo Database Successfully")
        } catch (error) {
            Logger.log({
                level: "error",
                label: "MongoDb",
                message: {
                    time: new Date().toString(),
                    error: error
                }
            })
            console.log("|=====================> Cannot Connect Mongo Database")
        }
    }
}

export default new MongoDb()