// Define Dependencies
import express from "express"
import cors from "cors"
import compression from "compression"
import morgan from "morgan"

import appConfig from "./configs/appConfig"
import ErrorHandling from './middlewares/ErrorHandling'
import LoggerRequest from './middlewares/LoggerRequest'
import MongoDb from "./databases/MongoDb"


const app = express()

// Define Middlewares
app.use(morgan("combined"))
    .use(cors())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }))
    .use(LoggerRequest)

    // Define Routes
app.post('/:id', (req, res) => {
    console.log("firedddd", rewrewrew)
    res.status(200).send({success: true, payload: []})
})
//http://localhost:8080/aboutus
app.get('/aboutus', (req, res) => {
    res.send('This is about page ')
})

app.use((req, res, next) => {
    res.status(404).send('Page not fount')
    next()
})

// Error Handling Middleware
app.use(ErrorHandling)

// HTTP
app.listen(appConfig.PORT, _ => {
    console.log(`|=====================> Server is listening on port: ${appConfig.PORT}`)
    MongoDb.connectDb()
})