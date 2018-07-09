var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
    var url = req.url;
    res.setHeader("content-type", "text/html;charset=utf-8");
    if(url === "/" || url === "/index") {
        res.end("你正在访问首页");
    } else if(url === "/login") {
        res.end("你正在访问登录页");
    } else if(url === "/list") {
        res.end("你正在访问列表页");
    } else {
        res.end("404 NOT FOUND");
    }
});

server.listen(8899, function () {
    console.log("服务器成功启动了，请访问:http://localhost:8899");
})