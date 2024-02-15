const http = require("http");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from express");
});

app.get("/about", (req, res) => {
  return res.send("Hello " + req.query.name);
});

const myServer = http.createServer(app);

myServer.listen(8000, () => {
  console.log("Started Server at port 8000");
});
