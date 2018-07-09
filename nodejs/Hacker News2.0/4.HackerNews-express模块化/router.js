
var handler = require("./handler")

module.exports = function (app) {

    // 2.注册路由
app.get("/index", function (req, res) { 
    handler.showIndex(req, res);
});

app.get("/", function (req, res) {
    // 重定向到index
    res.redirect("/index");
})
    // 7.渲染详情页
app.get("/submit", function (req, res) { 
    handler.showSubmit(req, res);
});

// 8.渲染添加页
app.get("/details", function (req, res, obj) { 
    handler.showDetails(req, res);    
});

app.get("/add", function (req, res) {
    handler.addGet(req, res);    
})

app.post("/add", function(req, res){
    handler.addPost(req, res);        
});
}


