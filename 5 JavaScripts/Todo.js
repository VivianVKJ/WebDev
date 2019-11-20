var todos = ["Buy New Turtle"];
var input = prompt("what would you like to do?");

while(input !== "quit"){
    if(input === "list"){
        console.log(todos);
    }else if(input==="new"){
        var newItem = prompt("New Item");
        todos.push(newItem);
        console.log(todos);
    }
    input = prompt("what would you like to do?");
}
console.log("you quit");

