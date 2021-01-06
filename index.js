const http = require("http");
const app = require("./clubServer");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

const host = "localhost";

app.listen(port, host, function() {
  console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});
