var http = require("http");

var server = http.createServer();

server.on("request", function (request, response) {
    console.log("hahahah");
    response.end("hello kitty!!!")
})

server.listen(8899, function () {
    console.log("服务器成功启动了，请访问:http://localhost:8899");
})