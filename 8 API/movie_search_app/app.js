var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});
app.get("/results",function(req,res){
    request('http://www.omdbapi.com/?s=California&apikey=thewdb',function(error,response,body){
        if(!error && response.statusCode == 200){
            console.log("no error");
            var parsedJson = JSON.parse(body);
           // res.send(parsedJson["Search"][0]);
            res.render("results.ejs",{parsed: parsedJson});
        } 
    });
});
app.listen(3000,function(){
    console.log('Movie App has started!');
});