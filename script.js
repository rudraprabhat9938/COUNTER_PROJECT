const textarea=document.getElementById("textarea")
const totalchar=document.getElementById("tot-char")
const remainingchar = document.getElementById("rem-char")


textarea.addEventListener( "keyup",() => {
          rudra()
    })
function  rudra(){
     totalchar.innerText=textarea.value.length;
     remainingchar.innerText = 50 - parseInt(textarea.value.length);
    
}