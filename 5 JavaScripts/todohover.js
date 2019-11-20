var lists = document.querySelectorAll("li");
for(var i=0;i<lists.length;i++){
    lists[i].addEventListener("mouseover",function(){
        this.classList.add("select");
    });
    lists[i].addEventListener("mouseout",function(){
        this.style.color = "black";
    });
    lists[i].addEventListener("click",function(){
        this.classList.add("done");
    });
}