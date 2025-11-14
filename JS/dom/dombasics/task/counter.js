
var h1  = document.querySelector("h1");
var btn = document.querySelector("#btn");
console.log(btn)

h1.style.fontSize="8rem"
document.body.style.display="flex"
document.body.style.alignItems="center"
document.body.style.flexDirection="column"

let a = h1.textContent;

btn.querySelector("#inc").addEventListener("click",()=>{
    a++;
    h1.innerHTML=a
})
btn.querySelector("#dec").addEventListener("click",()=>{
    a--;
    h1.innerHTML=a
})

btn.querySelector("#inc").style.padding="1rem"
btn.querySelector("#inc").style.borderRadius="1rem"
btn.querySelector("#inc").style.border="none"
btn.querySelector("#inc").style.backgroundColor="red"
btn.querySelector("#inc").style.margin="1rem"

btn.querySelector("#dec").style.padding="1rem"
btn.querySelector("#dec").style.borderRadius="1rem"
btn.querySelector("#dec").style.border="none"
btn.querySelector("#dec").style.backgroundColor="red"

