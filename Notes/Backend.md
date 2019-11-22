* What's going on betwenen frontend & backend?

![image-20191108162134387](/Users/vivian/Library/Application Support/typora-user-images/image-20191108162134387.png)

* Backend features

![image-20191108162121819](/Users/vivian/Library/Application Support/typora-user-images/image-20191108162121819.png)

* After Click Enter:
  1. HTTP Request is sent to a particular server's IP address
  2. Server sends back http responds

### GET https://www.google.com/

1. Body (HTML, CSS, JavaScript)
2. Headers

```txt
content-type →text/html; charset=UTF-8
status:200
```



## Express

### Embeded JS

* npm install express-generator

```javascript
app.get("/love/:thing",function (req,res) {
    var thing = req.params.thing;
    res.render("love.ejs",{thingvar : thing});
    res.send("<h1>welcome</h1>");
});
//  /view/love.ejs
<h1> you fell in love with: <%=thingvar %> </h1>
```

* Inside Ejs:

```javascript
<%= %> //what ever inside will be in the html
<% %>  //run the code
```

* Simplify

```javascript
app.use(express.static('public'));  //use files under public
app.set("view engine","ejs"); //no need of  .ejs
```

* Post & Redirect

```javascript
var bodyParser = require("body-parser"); //take request body from js 

app.post("/addfriend",function(req,res) {
    console.log(req.body);
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");  
});

<form action="/addfriend" method = "POST">
    <input type = "text placeholder = "name>
    <button> I made a new friend!</button>
</form>
```





