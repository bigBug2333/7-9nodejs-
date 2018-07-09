var fs = require("fs");
var path = require("path");
fs.readFile(path.join(__dirname, "data.txt"), "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// var fs = require("fs");
// var path = require("path");
// fs.readFile(path.join(__dirname, "data.txt"), "utf-8", function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })