let head = document.getElementById("heading");
let btn = document.getElementById("btn");
let msg = document.getElementById("message");

btn.addEventListener("click", function () {
    head.innerText = "Welcome Lavkush";
    head.style.backgroundColor = "red";
    if(msg.style.display == "none"){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
});