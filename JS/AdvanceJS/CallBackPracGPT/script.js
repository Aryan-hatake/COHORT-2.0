
// function loadFile(path,callback){
//     console.log(`loading ${path} File...`)
//     setTimeout(()=>{
//         callback(path)
//     },2000)
// }

// loadFile("aryan.txt",function(path){console.log("Hello from ",path)})

// function filterAndDo(arr, predicateFn, actionFn){
//     let even =  predicateFn(arr , actionFn);
//     actionFn(even)
// }

// function predicateFn(arr , actionFn){
//     let even  = arr.filter(e=> e%2=== 0)
//     return even;

// }

// function actionFn(arr){
//     console.log(arr, "- actionFn")
// }

// filterAndDo([1,2,3,4],predicateFn,actionFn)


// function login(username,pass,callback){
//     let ok = confirm("are you sure about your given data ?")

//     console.log("Verifying...")

//     setTimeout(()=>{
         
//         if(username==="aryan" && pass === 12345){
//             callback(null,101)
//         }
//         else{
//             callback(Error
//             , null)
//         }

//     },2000)
// }

// function getUserData(userId, callback){
//     let user = {
//         id:userId,
//         name:"aryan",
//         email:"aryan@a"
//     }
//     callback(null,user)
// }

// login("aryan",12345,function(err,))


async function fetchWithretry(url, retries , attempt , callback){
   


    let callApi = await fetch(url)
    let text  = await callApi.text()
    if(callApi.ok){
        callback("sucess !")
    }
    else{
        callback("failed !")

        if(attempt<retries){

            console.log("retrying...")         
            setTimeout(()=>{
                fetchWithretry(url,retries--,attempt++,function(result){ console.log(result)})
            })
        }
    }
}

fetchWithretry("https://jsonplaceholder.typicode.com/todos/1", 3 , 0,function(result){ console.log(result)})