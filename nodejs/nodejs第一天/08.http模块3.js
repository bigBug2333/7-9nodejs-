var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
    var url = req.url;
    res.setHeader("content-type", "text/html;charset=utf-8");
    if (url === "/" || url === "/index") {
        res.end("你正在访问首页的内容");
    } else if (url === "/login") {
        res.end("你正在访问登录页的内容");
    } else if (url === "/list") {
        res.end("你正在访问列表页的内容");
    } else {
        res.end("404NotFound");
    }
    res.end(url)
})

server.listen(9876, function () {
    console.log("服务器启动了,请访问:http://localhost:9876");
})