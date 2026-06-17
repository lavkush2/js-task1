const btn  = document.getElementById("menuBtn");
const menu  = document.getElementById("menu");
const hide = document.getElementsByClassName("hide");

btn.addEventListener("click",function(){
    menu.classList.toggle("hide");
})