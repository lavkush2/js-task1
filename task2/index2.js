const container = document.getElementById("container");
const pswrd = document.getElementById("password");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click",function(){
    if(pswrd.type="password"){
        pswrd.type = "text";
        btn.innerText = "Hide Password";
    }
    else{
        pswrd.type = "password";
        btn.innerText = "Show Password";
    }
})