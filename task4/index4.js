const btn = document.getElementById("faqBtn");
const para = document.getElementById("answer");

btn.addEventListener("click",function(){
    if(para.style.display=="none"){
        para.style.display = "block";
    }
    else{
        para.style.display = "none";
    }
})
