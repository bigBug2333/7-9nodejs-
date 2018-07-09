// 1.基础结构
var express = require("express");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();

// 3.虚拟目录
app.use("/assets", express.static("assets"));

// 2.注册路由
app.get("/index", function (req, res) { 
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/submit", function (req, res) { 
    res.sendFile(path.join(__dirname, "views", "submit.html"));
});

app.get("/details", function (req, res) { 
    res.sendFile(path.join(__dirname, "views", "details.html"));
});

app.get("/", function (req, res) {
    // 重定向到index
    res.redirect("/index");
})

app.listen(8899, function () {
    console.log("HackerNews2.0已经上线，访问：http://localhost:8899");
})