// 要求 localhost:9999   localhost:9999/index           响应首页
//     localhost:9999/login  响应登录页
//     localhost:9999/list   响应列表页
//     其他url     响应404

// 1.导入一个http模块
var http = require("http");
var fs = require("fs");
var path = require("path");
var server = http.createServer();
// 2.创建一个服务器
var server = http.createServer();
// 3.监听用户请求
// 一层：监听用户请求
server.on("request", function (req, res) {
    var url = req.url;
    // 二层：判断路径
    if (url === "/" || url === "/index.html") {
        // 三层：读取index.html进行响应
        fs.readFile(path.join(__dirname, "index.html"), function (err, data) {
            // 四层：如果失败了
            if (err) {
                return console.log("读取文件失败了");
              }
              res.end(data);
        })
    } else if (url = "/list") {
        //读取index.html进行响应
        fs.readFile(path.join(__dirname, "list.html"), function (err, data) {
            if (err) {
                return console.log("读取文件架失败了");
            }
            res.end(data);
        })
    } else if (url = "/login") {
        //读取index.html进行响应
        fs.readFile(path.join(__dirname, "login.html"), function (err, data) {
            if (err) {
                return console.log("读取文件架失败了");
            }
            res.end(data);
        })
    } else {
        res.statusCode = 404;
        res.end("404");
    }
})
// 4.启动服务器
server.listen(8899, function () {
    console.log("服务器成功启动了，请访问：http://localhost:8899");
})