// Define Dependencies
import express from "express"
import cors from "cors"
import compression from "compression"
import morgan from "morgan"

import AppConfig from "./configs/AppConfig"
import MongoDb from "./databases/MongoDb"

import ErrorHandling from './middlewares/ErrorHandling'
import LoggerTrackingHandling from './middlewares/LoggerTrackingHandling'
import ResponseHandling from './middlewares/ResponseHandling'
// import ValidatorHandling from './middlewares/ValidatorHandling'

// Import file routes config
import UserRoutes from "./routes/UserRoutes"

// Create Express App
const app = express()

// Define Middlewares
// if (process.env.NODE_ENV !== "test") app.use(morgan("combined"))

app.use(cors())
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
    res.jsonError({
        code: 404,
        message: "Page Not Found"
    })
    next()
})

// Error Handling Middleware
app.use(ErrorHandling)

// HTTP
app.listen(AppConfig.PORT, _ => {
    if( process.env.NODE_ENV !== "test") console.log(`|=====================> Server is listening on port: ${AppConfig.PORT}`)
    MongoDb.connectDb()
})

export default app