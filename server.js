const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middkewares = jsonServer.defaults();

server.use(middkewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
   next()
});

server.use(router);

server.listen(3005, () =>{
    console.log("Running on http://localhost:3005");
});