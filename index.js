var jsonServer = require('json-server')
var server = jsonServer.create()
var middlewares = jsonServer.defaults()
server.use(middlewares)

// var router = jsonServer.router('db.json')
// server.use(router)

var examples = require('./example')
var routerExamples = jsonServer.router(examples())
server.use(routerExamples)

const port = 3001
server.listen(port, function () {
  console.log(`JSON Server is running on http://localhost:${port}`)
})