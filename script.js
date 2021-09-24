var form = document.getElementById("myForm");
var list = document.getElementById("list");
var input = document.getElementById("task");
var clearButton = document.getElementById("clear");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(input.value != ""){

    var li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = "";
    }
})

clearButton.addEventListener("click", function(){
 list.innerHTML = "";   
})

