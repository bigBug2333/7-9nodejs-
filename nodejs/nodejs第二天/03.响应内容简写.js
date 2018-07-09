var http = require("http");

// 创建服务器同时监听用户请求
http.createServer(function(req, res){
  console.log(req.url);
  //localhost:8899   localhost:8899/index
  if(req.url === "/" || req.url === "/index") {
    res.end("index");
  }else if(req.url === "/list") {
    res.end("list");
  }else {
    res.end("404");
  }
}).listen(8899, function(){
  console.log("服务器启动成功了,请访问:http://localhost:9999");
});