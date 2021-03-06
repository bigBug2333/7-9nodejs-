// Localhost:8899/ Localhost:8899/index index.html
// Localhost:8899/details?1111          details.html
// Localhost:8899/submit                submit.html
// Localhost:8899/assets/xxxx 静态      请求了啥响应啥
// 其他url                              404

// 1.导入一个http模块
var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
// 2.创建一个服务器
var server = http.createServer();
// 3.监听用户请求
server.on("request", function(req, res) {
  var url = req.url;
  // 访问index.html页面
  if (url === "/" || url === "/index") {
    //渲染index.html
    fs.readFile(path.join(__dirname, "views", "index.html"), function(
      err,
      data
    ) {
      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;charset=utf-8"
        });
        res.end("404, 你要访问的页面不存在");
        return;
      }
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(data);
    });
  } else if (url === "/submit") {
    //渲染details.html
    fs.readFile(path.join(__dirname, "views", "submit.html"), function(
      err,
      data
    ) {
      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;charset=utf-8"
        });
        res.end("404, 你要访问的页面不存在");
        return;
      }
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(data);
    });
  } 
  else if (url.indexOf("/details") != -1) {
    //渲染submit.html
    fs.readFile(path.join(__dirname, "views", "details.html"), function(
      err,
      data
    ) {
      if (err) {
        //渲染404页面
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("404,你的请求不存在");
        return;
      }
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(data); //返回给页面
    });
  } else if (url.indexOf("/assets") != -1) {
    //渲染静态页面
    res.setHeader("content-type", mime.getType(url));
    fs.readFile(path.join(__dirname, url), function(err, data) {
      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;         charset=utf-8"
        });
        res.end("404, 你要访问的页面不存在");
        return;
      }
      res.end(data); //返回给页面
    });
  } else {
    //渲染404页面
    res.writeHead(404, {
      "content-type": "text/html;charset=utf-8"
    });
    res.end("404, 你请求的页面不存在");
  }
});

// 4.启动服务器
server.listen(8899, function() {
  console.log("服务器成功启动了，请访问：http://localhost:8899");
});
