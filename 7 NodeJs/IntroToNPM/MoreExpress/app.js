var express = require("express");
var app = express();

app.use(express.static('public'));
app.set("view engine",".ejs");

app.get("/",function (req,res) {
    res.render("home");
    res.send("<h1>welcome</h1>");
});
app.get("/love/:thing",function (req,res) {
    var thing = req.params.thing;
    res.render("love",{thingvar : thing});
    res.send("<h1>welcome</h1>");
});
app.get("/posts",function(req,res){
    var posts = [
        {title:'Post1',author:"Susy"},
        {title:'Post2 My adorable pet',author:"Kris"},
        {title:'Post3 Haha',author:"Colt"}
    ];
    res.render("post",{posts: posts});
})

app.listen(3000,function(){
    console.log("Server is listening!!");
});