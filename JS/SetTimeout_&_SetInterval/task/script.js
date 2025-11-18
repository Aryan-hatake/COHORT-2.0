var btn = document.querySelector("button");
var num = document.querySelector("span");
var progress = document.querySelector(".pro-inner");


btn.addEventListener("click",()=>{
     var grow = 0;
     btn.disabled=true
     btn.style.opacity="0.4"
     btn.innerHTML="downloading"
     btn.style.pointerEvents="none"
     

     let id = setInterval(()=>{

        rand = Math.floor(Math.random()*30);

         if(grow+rand<=100)
            grow+=rand;
         progress.style.width=grow+"%"
         
         num.innerHTML=grow+"%"
         
         if(grow==100){
             clearInterval(id);
             btn.innerHTML="downloaded"
             btn.style.opacity=1
            }

            console.log(rand)
            console.log("grow:",grow)

        },500)
})