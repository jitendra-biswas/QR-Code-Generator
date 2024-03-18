var input = document.querySelector(".text");
var btn = document.querySelector("button");
var qr = document.querySelector(".QR");
var qr_code = document.querySelector("img");
 
btn.addEventListener("click",function(){
    qr_code.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
    qr.style.border = "1px solid lightgray";
    qr.style.maxHeight = "200px"
    
})