// apache的功能：  
//     localhost:9999/index.html  寻找index.html页面，如果有，就会返回，如果没有404
//     localhost:9999/list.html  寻找index.html页面，如果有，就会返回，如果没有404
//     localhost:9999/login.html  寻找index.html页面，如果有，就会返回，如果没有404
//     localhost:9999/register.html  寻找index.html页面，如果有，就会返回，如果没有404

// 1.导入一个http模块
var http =require("http");
var fs = require("fs");
var path = require("path");
var server = http.createServer();
var mime = require("mime");

// 2.创建一个服务器
var server = http.createServer();

// 3.监听用户请求
// 一层：监听用户请求
server.on("request", function (req, res) {
    var url = req.url;
    // 设置响应头
    res.setHeader("content-type", mime.getType(url));// /index.html
    // 读取index.html进行响应
    fs.readFile(path.join(__dirname, url), function (err, data) {
        // 如果失败了
        if (err) {
            //文件没找到的响应=响应码+响应消息
            res.writeHead(404, {
                "content-type": "text/html;charset=utf-8"
            });
            res.end("404, 你访问的页面不存在");
            return;
        }
        res.end(data);
    })
})

// 4.启动服务器
server.listen(8899, function () {
    console.log("服务器成功启动了，请访问：http://localhost:8899");
})