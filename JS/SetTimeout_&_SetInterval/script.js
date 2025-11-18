 //setTimeout = delay
 //setInterval = interval

 setTimeout(()=>{
    console.log("Heloo after 2s")
 },2000)

 let a = 0;
let id =  setInterval(()=>{
    console.log(++a);
    if(a == 10){
       clearInterval(id)
    }
 },1000)
