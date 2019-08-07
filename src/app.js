// Define Dependencies
import express from "express"
import cors from "cors"
import compression from "compression"
import morgan from "morgan"

import AppConfig from "./configs/AppConfig"
import ErrorHandling from './middlewares/ErrorHandling'
import LoggerTrackingHandling from './middlewares/LoggerTrackingHandling'
import ResponseHandling from './middlewares/ResponseHandling'
import MongoDb from "./databases/MongoDb"

// Import file routes config
import UserRoutes from "./routes/UserRoutes"

// Create Express App
const app = express()

// Define Middlewares
app.use(morgan("combined"))
    .use(cors())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }))
    .use(LoggerTrackingHandling)
    .use(ResponseHandling)

// Define Routes
app.use("/api/v1/users", UserRoutes)
app.use("/api/v1/account", UserRoutes)
app.use("/api/v1/member", UserRoutes)
app.use("/api/v1/formula", UserRoutes)
app.use("/api/v1/formula-group", UserRoutes)


app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
    next()
})

// Error Handling Middleware
app.use(ErrorHandling)

// HTTP
app.listen(AppConfig.PORT, _ => {
    console.log(`|=====================> Server is listening on port: ${AppConfig.PORT}`)
    MongoDb.connectDb()
})