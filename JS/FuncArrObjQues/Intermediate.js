// function runTwice(func){
//     func();
//     func();
// }

// runTwice(function(){ console.log("inner func") }) //or runTwice(()=>{console.log("inner func")})

//--------------------------------------------------------------

// function pure(params){
//    return "anything"
// }
// pure("args")

// let a = 0;
// function impure(param){
//     a+=param
// }
// impure(2)


//---------------------------------------------------------------

// let obj = {
//     name:"rashi",
//     age:18
// }

// function objDestructuring({name,age},obj){
//     console.log()
//     const {name:n2,age:a2} = obj
//     console.log(n2,a2)
//     console.log(name,age)
// }
// objDestructuring(obj,obj)

//-----------------------------------------------------------------

// let arr = [1,2,3,4,5];

// let sqre = arr.map((e)=>{
//     return e*e
// })
// console.log(sqre)

//------------------------------------------------------------------

// let arr = [1,2,3,4,5,6];

// let even = arr.filter((e)=>{
//     return e%2===0
// })

// console.log(even)

//--------------------------------------------------------------------

// let arr = [1000,2000,3000];

// let totalSalary = arr.reduce((acc,b)=>{
//             return acc+b
// },0)
// console.log(totalSalary)

//----------------------------------------------------------------------

// let names = ["aryan","rashi","dev","surekha","vijay"]

// let ans = names.every((e)=>{
//     return e.length>3
// })
// console.log(ans)

//-----------------------------------------------------------------------

// let obj = {
//     name:"aryan",
//     age:19
// }
// // Object.freeze(obj) prevents modications as well addition and deletion of keys

// // Object.seal(obj)  allows modification but not addition and deletion of keys

// console.log(obj)

//---------------------------------------------------------------------------

// let obj ={
//     user:{
//         address:{
//             city:"Om residency"
//         }
//     }
// }

// console.log(obj?.user?.address?.city)