// 1.导入fs模块
var fs = require("fs");
// 2.导入path模块
var path = require("path");
// 2.读取文件
    // 参一：相对文件路径
    // 参二：编码模式
    // 参三：回调函数
fs.readFile( path.join(__dirname, "data.txt"), "utf-8", function (err, data) {
    if (err) {
        return console.log ("文件读取失败了", err);
    }
    console.log(data);
})

// 3.追加文件
fs.appendFile( path.join(__dirname, "data.txt"), '\n'+"疑是地上霜", function (err, data) {
    if (err) {
        console.log ("文件读取失败了", err);
    } else {
        console.log("写文件成功了");
    }
})
