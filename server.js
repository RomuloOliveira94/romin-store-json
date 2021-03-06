const jsonServer = require("json-server");
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});
server.use(router);
server.use(middleware);
server.listen(port, () => {
  console.log(`Server is running in ${port}`);
});
