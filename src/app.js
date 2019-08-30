// Define Dependencies
import express from "express"
import session from "express-session"
import socketIO from "socket.io"
import http from "http"
import cors from "cors"
import compression from "compression"
// import morgan from "morgan"

import AppConfig from "./configs/AppConfig"
import MongoDb from "./databases/MongoDb"
import SocketIO from "./socket/SocketIO"

import ErrorHandling from "./middlewares/ErrorHandling"
import LoggerTrackingHandling from "./middlewares/LoggerTrackingHandling"
import ResponseHandling from "./middlewares/ResponseHandling"
import bodyParser from 'body-parser'
// import ValidatorHandling from "./middlewares/ValidatorHandling"

// Import file routes config
import Routes from "./routes/Routes"

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
    .use(session({
        key: 'user_sid',
        secret: 'somerandonstuffs',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
    }))
    .use(LoggerTrackingHandling)
    .use(ResponseHandling)


// Define Routes
app.use(Routes)

app.use((req, res, next) => {
    res.jsonError({
        code: 404,
        message: "Page Not Found"
    })
    next()
})

// Error Handling Middleware
app.use(ErrorHandling)

// Start Htpp Server
const server = http.createServer(app)

// HTTP
// Create socketIO
const io = socketIO(server)

io.on("connection", (socket) => {
    console.log("connect")
    // socket.emit("get_user", "ahihi user ne")
})

    // // Create socketIO
    // SocketIO.init(server)

server.listen(AppConfig.API_SERVER_PORT, _ => {
    if( process.env.NODE_ENV !== "test") console.log(`|>>>>>>>>>>>>>>>>>>>>>>> Server is listening on port: ${AppConfig.API_SERVER_PORT}`)

    // Initialize mongoose
    MongoDb.connectDb()
    // SocketIO.emit("get_user", "test")
})

export default server