var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ credentials: true, origin: true }));

app.options("*", cors());
app.set("port", process.env.PORT || 80);
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
