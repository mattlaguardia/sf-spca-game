var express = require('express')
var server = express()

server.use(express.static("./public"))

server.listen(process.env.PORT || 3000)
console.log("Server is running on port:3000")
