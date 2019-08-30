const AppConfig = require("./config/AppConfig")
const http = require("http")
const A = require('./query/getdata')

// Start Htpp Server
const server = http.createServer()


   
server.listen(AppConfig.API_SERVER_PORT, _ => {
  if( process.env.NODE_ENV !== "test") console.log(`|>>>>>>>>>>>>>>>>>>>>>>> Server is listening on port: ${AppConfig.API_SERVER_PORT}`)

    // Initialize mongoose
    A()
    // SocketIO.emit("get_user", "test")
})

module.exports = server