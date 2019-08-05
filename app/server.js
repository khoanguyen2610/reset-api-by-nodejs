// Define Dependencies
import express from "express"
import cors from "cors"
import appConfig from "./configs/appConfig"
import loggerRequest from './middlewares/loggerRequest'

const app = express()

// Define Middlewares
app.use(cors())
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }))
    .use(loggerRequest)


// Define Routes
app.post('/:id', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(`<h1 style="color: blue;">Hello world !</h1>`)
})
//http://localhost:8080/aboutus
app.get('/aboutus', (req, res) => {
    res.send('This is about page ')

})

app.use((req, res, next) => {
    console.log("404")
    res.send('Page not fount')
    next()
})

// Define Middlewares
app.listen(appConfig.PORT, () => {
    console.log(`Server is listening on port: ${appConfig.PORT}`)
})