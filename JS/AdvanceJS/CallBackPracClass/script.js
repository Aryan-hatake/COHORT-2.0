// function afterDelay(time,callback){
//     setTimeout(()=>{
//         callback()
//     },time)
// }
// afterDelay(3000,function(){console.log("Callback executed !")})



//----------------------------------------------------------------------

function getUser(username,callback){
    setTimeout(()=>{
        callback({id:1,username:username})
    },1000)
}

function getUserPosts(userId){
    let user = {
        id:1,
        
    }
}

getUser("aryan",function({id,username}){

    console.log(id)
    getUserPosts(id)
})