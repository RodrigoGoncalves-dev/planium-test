const http = require('http');
const PORT = 3333;
const app = require('../app.js')
const server = http.createServer(app)

server.listen(PORT)