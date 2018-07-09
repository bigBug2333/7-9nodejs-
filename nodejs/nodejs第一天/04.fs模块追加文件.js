//1. 先把1.txt的内容读取出来
//2. 拼接上需要添加的数据
//3. 写入到1.txt文件中
var fs = require("fs");

fs.appendFile("data.txt", "\n" + "疑是地上霜", "utf-8", function (err) {
    if(err) {
        console.log("追加文件失败", err);
        return;
    } else {
        console.log("文件追加成功");
    }
})