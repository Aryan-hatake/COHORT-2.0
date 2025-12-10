// function runAfterDelay(time,cb){

//     setTimeout(()=>{
//         cb()
//     },time)

// }
// runAfterDelay(2000,function(){
//     console.log("Executed After Delay")
// })

//------------------------------------------------------------------------------

// function squareAfterDelay(number,callback){
//     setTimeout(()=>{
//          callback(number*number);
//     },1000)
// }

// squareAfterDelay(4,function(square){
//     console.log("Result is ",square)
// })

//----------------------------------------------------------------------------

// function getUser(username,callback){
//     setTimeout(()=>{
//           callback({id:1,username:"aryan"})
//     },1000)
// }

// function getPosts(userId,callback){

//     setTimeout(()=>{
//         callback(["helo","long time no see","bella ciao"])
//     },1000)
// }
// getUser("aryans",function(data){
//    getPosts(data.id,function(allPosts){
//       console.log(data.username)
//       console.log(allPosts)
//    })
// })

//---------------------------------------------------------------------------

// function loginUser(email,callback){
//    setTimeout(()=>{
//       callback({userId:101,email})
//    },1000)
// }

// function fetchSettings(userId,callback){
//     console.log("User logged in :",userId)
//       setTimeout(()=>{
//         callback({theme:"dark",notifications:true})
//       },1000)
// }
// function startApp(settings,callback){
//     console.log("Settings loaded: ",settings)
//      setTimeout(()=>{
//        callback(settings.theme)
//      },1000)
// }

// loginUser("aryan@a",function(data){
//      fetchSettings(data.userId,function(settings){
//             startApp(settings,function(theme){
//                  console.log("App started with theme: ",theme)
//             })
//      })
// })

//--------------------------------------------------------------------------------

// function connectToDB(callback) {
//     let rand = Math.floor(Math.random() * 10);

//     if (rand < 5) {
//         console.log('DB connected !');
//         setTimeout(() => {
//             callback({ id: 7, name: "Aryan" });
//         }, 1000)
//     }
//     else {
//         console.log("DB connection Failed :( ")
//     }
// }

// function getUserData(data, callback) {
//     setTimeout(() => {
//         callback(data.id)
//     }, 1000)

// }
// function getTransactions(userId, callback) {
//     setTimeout(()=>{
//          callback([100,250,-50])
//     },1000)
// }

// connectToDB(function(data){
//       getUserData(data,function(id){
//           getTransactions(id,function(transaction){
//              console.log(id)
//              console.log("Your transaction",transaction)
//           })
//       })
// })

//--------------------------------------------------------------------------------------

// function signup(email, callback) {
//     console.log("registering your email id...")

//     setTimeout(() => {
//         callback(null, email)
//     }, 1000)
// }
// function emailVerify(email, callback) {

//     console.log("verifying your email...")

//     setTimeout(() => {
//         console.log("your email has been verified!")
//         callback(null, email)
//     }, 2000)

// }
// function createProfile(email, callback) {
//     console.log("creating your profile...")
//     let name  = email.slice(0,email.indexOf("@"))
//     setTimeout(() => {
//         callback(null,name)
//     }, 1000)
// }
// function showWelcomePage(name,callback) {
//     setTimeout(()=>{
//         callback(null,name);
//     },1000)
// }

// signup("aryan@gmail.com", function (err, email) {
//     if (err) {
//         console.log(err)
//         return;
//     }

//     emailVerify(email, function (err, email) {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         createProfile(email,function(err,name){
//             if(err){
//                 console.log(err)
//                 return;
//             }
//             showWelcomePage(name,function(err){
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 console.log(name,"your profile has been created !")
//             })

//         })
//     })

// })

//--------------------------------------------------------------------------------

function scanQR(details,callback){
    console.log("Scanning QR code...")
    setTimeout(()=>{
        console.log("QR code Scanned.")
        callback(null,details)
    },1000)
}
function fetchPaymentDetails(details,callback){
    console.log(`fetching ${details.To} Bank acc...`)
    let amount = details.amount
    setTimeout(()=>{
        console.log(details.To," Bank Acc fetched.")
        callback(null,amount)
    },1000)
}
function processPayment(amount,callback){
    console.log("Processing Payment...")
    setTimeout(()=>{
       callback(null,true,amount)
    },1000)

}
function showSuccess(amount,status,callback){
    if(status){

            callback(null,`Transaction of ${amount} have been made !`) 
    }
    else{
        callback("Payment failed",null)
    }
    }
scanQR({amount:30,To:"General Store"},function(err,details){
    if(err){
        console.log(err);
        return
    }
    fetchPaymentDetails(details,function(err,amount){
        if(err){
            console.log(err)
            return
        }
        processPayment(amount,function(err,status,amount){
            if(err){
                console.log(err);
                return
            }
            showSuccess(amount,status,function(err,message){
                if(err){
                    console.log(err)
                    return
                }
                console.log(message)
            })
        })
    })
})