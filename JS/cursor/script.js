var cursor = document.querySelector("#cursor");

document.querySelector("main").addEventListener("mousemove",(dets)=>{
    cursor.style.top=dets.y+"px"
    cursor.style.left=dets.x+"px"
})
//Event => keydown , dets.code