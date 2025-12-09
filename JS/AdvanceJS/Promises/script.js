//got to meta and bring data

let prm =  new Promise((resolve,reject)=>{
  //logic to go to Meta and get Data
  //if data aya -> resolve
  //else reject

  setTimeout(()=>{
     resolve()
  },2000)

})

prm.then(()=>{
     console.log("got data")
}).catch(()=>{
    console.log("data nhi mila")
})



// fetch(`https://randomuser.me/api/`)
// .then(function(raw){
//    return raw.json() //raw data (unreadable)
// }).then((readableData)=>{
//     console.log(readableData.results[0].name.first)
// })


//fetch se kisi bhi par jaa sakte hai
//fetch ka data unreadable hota hai
//usey json banake readable krte hai
//fetch humesha 2 then leta hai ek raw data ko json mein convert krne aur dusra readable data ko use ya console krne