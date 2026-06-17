const body = document.getElementById("body");
const btn = document.getElementById("darkBtn");

btn.addEventListener("click", function () {

    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } 
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }

});