var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment");
});
app.get("/speak/:animal",function(req,res){
    var animalType = req.params.animal.toLowerCase();
    // if(animalType == "pig")
    //     res.send("The pig says 'Oin!' ");
    // else if(animalType == "cow")
    //     res.send("The cow says 'Moo!' ");
    // else if(animalType == "dog")
    //     res.send("The dog says 'Woof woof!' ");
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
    }
    var sound = sounds[animalType];
    res.send("The "+animalType+" says '"+sound+"'");
});
app.get("/repeat/:string/:times",function(req,res){
    var content = req.params.string;
    var times = Number(req.params.times);
    var print = "";
    for(var i=0;i<times;i++){
        print += content;
        print+=" ";
    }
    res.send(print);
});
app.get("*",function(req,res){
    res.send("Sorry, page not found");
});
app.listen(3001,function(){
    console.log('Server has started!');
});
