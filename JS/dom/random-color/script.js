var box = document.querySelector(".box")
var btn = document.querySelector("button");

let arr = ["aryan","rashi","dev"]

btn.addEventListener("click",()=>{
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    
    var index = Math.floor(Math.random()*arr.length);
     console.log(arr[index])
    box.style.backgroundColor=`rgb(${r},${g},${b})`

    btn.innerHTML=`rgb(${r},${g},${b})`

})

