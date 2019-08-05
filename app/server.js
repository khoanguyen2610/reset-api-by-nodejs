// Define Dependencies
const express = require("express")
const cors = require('cors')

const logger = require('./utils/logger')

const app = express()
const PORT = 8080


// Define Middlewares
app.use(cors())

// Define Routes
app.get('/', (req, res) => {
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
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})