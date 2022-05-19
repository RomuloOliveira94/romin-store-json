const jsonServer = require("json-server");
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(cors({ credentials: true, origin: "http://localhost/3000" }));
server.use(router);
server.use(middleware);
server.listen(port, () => {
  console.log(`Server is running in ${port}`);
});
