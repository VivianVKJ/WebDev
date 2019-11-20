## Intro to HTML

```html
<!DOCTYPE html>
<html>
    <head> 
    <!--metadata goes in head-->
        <title>
        My First Page
        </title>
    </head>
    <body>
        <h1>This is my first tag!</h1>
        <!-- content goes in body -->
    </body>
</html>
```



[HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

* \<h1-6> 

* \<b> ==\<strong> ; \<i>==\<em> (the later is stronger)

* Lists: ordered list(\<ol>)& unordered list(\<ul>)

  ```html
  <ol> <!--order list-->
  	<li>Red</li>
  	<li>Yellow</li>
  </ol>
  ```

* Divs and Spans
  
  * Div: Block level container
* Link: \<a href="...">\</a>
  * href = "http://www.google.com"  ✅
  * href = "www.google.com" ❎

* Table

  ```html
  <table border="1">
    <thead>
      <tr>
        <th>head 1</td>
        <th>head 2</td>
      </tr>
    </thead>
    <tbody>
      <tr>      
        <td>r1 1</td>
        <td>r1 2</td>
      </tr>
      <tr>      
        <td>r2 1</td>
        <td>r2 2</td>
      </tr>
    </tbody>
  </table>
  ```

* Form

  * the \<form> tag
  * "name=.." is used for sending reult

  ```html
  <form action="/my-form-submitting-page" method="post">
      <!-- All our inputs will go in here -->
  </form>
  ```

  1. **action**: The URI of a program that processes the form information
  2. **method**:  the type of HTTP request  [post / get / dialog]
  3. **the \<input> tag**: \<input type="text> (date/color/file/checkbox)
  4. **label**: put the input text in the lable text
  5. **form validations**: 
     1. not empty: \<input id="email" type="email" `required`>
     2. input type：type="email"
  6. **radio button**: by given the same name, we connects them, pick one each time
  7. **select**: put value in `option` lable
  8. Input text: \<**textarea** rows="", cols = ""> 



## Intro to CSS

```css
h1 {
  color: purple;
  font-size: 56px;
}
```

* Color
  * color name
  * Hexadecimal
  * RGB
  * RGBA (a means alpha(transparency) channel.  Ranges from 0.0 - 1.0)
* Select Elements:
  * id
  * Class

### Image

``` html
  <img class="img-fluid" src="pinkblue.jpg" alt="">   
```



   

## Bootstrap

* Jumbotron: Inside a container!

  ``` html
  <div class = "jumbotron"> </div>
  ```

* Form

  * Class

    * Form Group: spacing
  
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>  
  
    * From Control

* Nav Bar

  * Step1: header with navbar-collapse

  ```html
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  		<div class="container-fluid">
  		  <a href="#" class="navbar-brand">Koffee</a>     
             
  			<div class="collapse navbar-collapse" id="bs-nav-demo">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">  <!-- left 2 right 2-->
            <li><a class="nav-link"  href="#">About</li>
            <li><a class="nav-link"  href="#">Contact</a></li>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li><a class="nav-link"  href="#">Sign Up</a></li>
            <li><a class="nav-link"  href="#">Login</a></li>
  				</ul>
  			</div>
        
  		</div>
  	</nav>
  ```
  
  * Step 2: Hamberger

  ```html
  <div class="container-fluid">
    		  <a href="#" class="navbar-brand">Koffee</a>     
          <button class="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#bs-nav-demo"  
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
          </button>
    			<div class = "collapse navbar-collapse" id = "bs-nav-demo">
            <!-- targer: collapse ID -->
            <!-- ul -->
       	 </div>
    </div>
  <!--Add [JQuery](code.jquery.com"-->
  ```

* Grid System

  * Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to **12** columns (Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three `.col-xs-4`.)
  * 4 size: `.col-xs-`,`.col-sm-`,`.col-md-`,`.col-lg-`

  ```html
  <div class ="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 pink"> COL LG 2</div>
      <div class="col-md-3 col-sm-6 pink"> COL LG 8</div> 
      <div class="col-md-3 col-sm-6 pink"> COL LG 8</div>                
      <div class="col-md-3 col-sm-6 pink"> COL LG 2</div>
    </div>
  </div>
  <!-- lg size each 3 columns, 25% each-->
  			<!-- lg imply the medium size  -->
  <!-- md size each 3 columns, 25% each-->
  <!-- sm size each 6 columns, 50% each-->
  ```

  * Nesting Grids:
  
* Navs + Flex

  ```html
  <nav class="nav flex-column flex-sm-row justify-content-center align-items-end">
    <!--smaller tham sm size, go column-->
    <a class="nav-link active" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </nav>
  ```

* Card