"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var application = express();
var port = 4242;
application.use(express.static("public"));
application.get("/", function (req, res) {
    res.sendFile("index.html");
});
application.listen(port, function () {
    console.log("server started, listening to port: " + port);
});
