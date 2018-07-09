var template = require("art-template")
var path = require("path");
var html = template(path.join(__dirname, "index.html"), {name: "zs"});

console.log(html);
