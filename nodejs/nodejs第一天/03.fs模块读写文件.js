var fs = require("fs");

// 会覆盖


//写文件
//参数1；文件名
//参数2： 写入的数据
//参数3：回调函数
fs.writeFile("data.txt", "床前明月光", function (err) {
    if(err !== null) {
        console.log("写文件失败");
        return;
    }

    console.log("写入文件成功了");

})