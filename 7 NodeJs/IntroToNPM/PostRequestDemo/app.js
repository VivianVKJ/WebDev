var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine",".ejs");
app.use(bodyParser.urlencoded({extended:true}));
// use bodyParser to parse js to html in req.body
var friends = ["Tony","Vivian","Kris","Fish"];

app.get("/",function(req,res){
    res.render("home");
});
app.get("/friends",function(req,res){
    res.render("friends.ejs",{friends:friends});
});
app.post("/addfriend",function(req,res) {
    console.log(req.body);
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});
app.listen(3000,function(){
    console.log("Server has started");
});