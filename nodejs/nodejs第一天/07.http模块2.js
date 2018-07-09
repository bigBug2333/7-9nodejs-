var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
    console.log("hahaha");
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.write("heiheihei1");
    res.write("heiheihei2");
    res.write("heiheihei3");
    res.write("heiheihei4");
    res.end();
})

server.listen(8899, function () {
    console.log("服务器启动成功了，请访问:http://localhost:8899");
})