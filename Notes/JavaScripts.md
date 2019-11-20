1. 5 Primitives

   * Numbers, Strings, Boolean
   * Null: 

   ```javascript
   var age =3;
   age = null;
   ```

   * Undefined

   ```javascript
   var age;
   //undefined
   ```

2. methods

   - alert( ):  display alert in a pop-up page
   - var useraame = prompt("what's your name")
   - Console.log: print to console

## Dom

```javascript
var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");
body.style.background = "white";

setInteval(function()){
           ...
},1000);
```

* **Select**

  * document.getElementById();
  * document.getElementClassName()
    * Object list, can't do for
  * document.getElementTagName()
  * document.getElementquerySelector();

  Document.quertSelector: CSS style selector , find the first matching element

```javascript
document.querySelector("h1");
document.querySelector(".gb");
document.querySelector("h1");
```

* **Manipulate**
  * change style
  * Add/remove class
  * change content of a tag
  * change attribute

```javascript
h1.classList.add("classname");
h1.classList.remove("classname");
//alternate
h1.classList.toggle("classname");
h1.textcontent; //all inside 
//treats whatever as string
h1.innerHTML;
ul.textcontent;
```

* **Manipulating Attributes**
  * getAttribute()
  * setAttribute()

```javascript
var link = document.getElementsByTagName("img")[0];
link.getAttribute("src");
link.setAttribute("src","http://www.google.com");
```

* **Events**
  * Click on a button
  * hover over a link
  * Drag and drop
  * Press the enter key

```javascript
//element.addEventListener(type, functionToCall);
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

## jQuery

* .html()
* .text()
* .attr()

```javascript
$("img:first-of-type").attr("src","http://www.google.com");
```

* .Var()

```javascript
$("input").val();
```

* .addClass()
* .removeClass();
* .toggleClass();

## jQuery Select

```javascript
$("button").click(function(){
	$(this).css("background","pink");
	console.log("You click" + $(this).text());
});
```

## jQuery Events

* $("...").keydown()
* .keypress()

```javascript
$("input").ketpress(function(event){
	if(event.which == 13)
		console.log("YOU HIT ENTER");
});
```

* .keyup();
* .on('click',function(){})

```
$("button").on("click", function(){
 $('div').fadeIn(1000, function(){
 	// $(this).remove();
 });
});
//fadeOut(),fadeIn(),fadeToggle()
```

