// function afterDelay(time,callback){
//     setTimeout(()=>{
//         callback()
//     },time)
// }
// afterDelay(3000,function(){console.log("Callback executed !")})



//----------------------------------------------------------------------

// function getUser(username,callback){
//     setTimeout(()=>{
//         callback({id:1,username:username})
//     },1000)
// }

// function getUserPosts(userId,callback){
//     setTimeout(()=>{
//         callback([1,2,3,4,5])
//     })
// }

// getUser("aryan",function({id,username}){
//     getUserPosts(id,function(allPosts){
//         console.log(username,allPosts)
//     })
// })

//------------------------------------------------------

function loginUser(callback){
    
    setTimeout(()=>{
        callback({userId:1,username:"aryan"})
    },1000)
}

function fetchPermissions(id,callback){
 
    console.log(id)
     setTimeout(()=>{
         callback(["read","write","delete"])
     },1000)
}

function loadDashboard(){
      setTimeout(()=>{
         console.log("dashboard loaded...")
      },1000)
}

loginUser(function(data){
    fetchPermissions(data.userId,function(permissions){
        loadDashboard(permissions)
    })
})