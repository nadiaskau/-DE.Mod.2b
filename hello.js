var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ credentials: true, origin: true }));

app.options("*", cors());
app.set("port", process.env.PORT || 5000);
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});

var head = document.getElementsByTagName("head");
var injectedScript = document.createElement("script");
head[0].appendChild(injectedScript);

var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function () {
  if (myRequest.readyState == 4 && myRequest.status == 200) {
    injectedScript.innerHTML = myRequest.responseText;
    //run a function in the script to load it
  }
};

function start() {
  myRequest.open(
    "GET",
    "https://raw.githubusercontent.com/nadiaskau/DE.Mod.2a/master/script/quiz.js",
    true
  );
  myRequest.overrideMimeType("application/javascript");
  myRequest.send();
}

start();
