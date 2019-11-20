
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var nl  = document.querySelector("#nl");
var nr = document.querySelector("#nr");
var up = document.querySelector("#up");
var input  = document.querySelector("input");
var p1Score = 0, p2Score = 0;
var winScore = input.value;
var gameover = false;



p1.addEventListener("click",function(){
    if(!gameover){
        p1Score+=1;
        nl.textContent = p1Score;
        if(p1Score===winScore){
            gameover=true;
            nl.classList.add("winner");
        }

    }
});
p2.addEventListener("click",function(){
    if(!gameover){
        p2Score+=1;
        nr.textContent = p2Score;
        if(p2Score===winScore){
            gameover=true;
            nr.classList.add("winner");
        }
    }
});
reset.addEventListener("click",function(){
    p1Score = 0;
    p2Score = 0;
    nl.textContent = 0;
    nr.textContent = 0;
    nl.classList.remove("winner");
    nr.classList.remove("winner");
    gameover = false;
});
input.addEventListener("change",function(){
    up.textContent = input.value;
    winScore  = input.value;
});