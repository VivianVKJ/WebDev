var express = require("express");
var app = express();


//“/" ==> hi,there
app.get("/",function(req,res){
    res.send("hi,there");
});
app.get("/bye",function(req,res){
    res.send("Goodbye");
});
app.get("/dog",function(req,res){
    res.send("Meow");
});
// should be at the last one
app.get("*",function(req,res){
    res.send("Anything else");
});
//tell express to listen for request (start the server)
app.listen(3000,function(){
    console.log('Server has started!');
});
