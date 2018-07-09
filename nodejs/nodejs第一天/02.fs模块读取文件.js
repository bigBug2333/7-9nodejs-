var fs = require("fs");

fs.readFile("data.txt", function (err, data) {
    if(err !== null) {
        console.log("读取文件失败");
        return;
    }

    console.log(data.toString());
    
})