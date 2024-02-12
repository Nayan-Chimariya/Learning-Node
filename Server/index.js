const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  log = `${Date.now()}: New Request received on ${req.url}\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      switch (req.url) {
        case "/":
          res.end("Hello this is home page");
          break;
        case "/about":
          res.end("Hello I am Nayan");
          break;
        default:
          res.end("404");
          break;
      }
    }
  });
});

myServer.listen(8000, () => {
  console.log("Started Server at port 8000");
});
