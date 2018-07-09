var express = require("express");
var path = require("path");

var app = express();

app.engine("html", require('express-art-template')
);
// 参一：后缀；
// 参二：使用的模板引擎类型

app.set("views", "aa");


//设置模板引擎的默认后缀
app.set("view engine", "html");

app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));

  //注意：如果是相对路径，模版引擎默认会去views目录下查找我们的模版文件
    res.render("index", {name:"zs"});
});

app.listen(8899,function () {
    console.log("ok");
    
})


