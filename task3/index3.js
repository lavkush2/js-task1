const menubtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menubtn.addEventListener("click", function () {

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } 
    else {
        menu.style.display = "none";
    }

});