const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const db = require("./db.json");
var bodyParser = require('body-parser')

 
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
 

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

server.use(bodyParser.json())
server.post(`/*`, (req, res, next) => {
    console.log(req.url, req.method, req.body, "woring");
	return res.jsonp({ "token": "foo" });
})


server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	console.log(req.url, req.method, "woring");
	return res.jsonp({ "token": "foo" });
  if (req.method === 'POST') {
  	console.log(req.url, req.method, req.body, db["posts"])
  	req.url = '/posts';
    return res.jsonp({ token: "foo" });
  }
  
  // Continue to JSON Server router
  //next()
})
 
// Use default router
server.use(router)
server.listen(8081, () => {
  console.log('JSON Server is running')
})