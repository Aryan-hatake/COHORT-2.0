// async function fetchKaro() {
//     let rawData = await fetch("https://randomuser.me/api/");
//     let readableData = await rawData.json()
//     console.log(readableData.results[0])
// }
// fetchKaro()

//------------------------------------------------------------


// function functionReturningPromise(){

//  return   new Promise((resolve,reject)=>{
//         let rand = Math.floor(Math.random()*10)        (await = then/catch , avoiding then/catch chaining using async await)
//     if(rand<5){
//         resolve(true)
//     }
//     else{
//         reject(false)
//     }
// })
// }

// async function abcd() {

//     let result = await functionReturningPromise()

//     console.log(result)
    
// }
// abcd()