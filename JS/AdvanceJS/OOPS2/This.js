// 1. global -> window
// 2. function -> window
// 3. es5 function inside object -> object
// 4. es6 function inside object -> window
// 5. es5 function inside es5 function inside object -> window
// 6. es6 function inside es5 function inside object -> object

// 🔥 ES5 Functions (regular function)
// this is dynamic

// Meaning:
// Its value depends on how the function is called.
// ✔️ If called as a method of an object → this = that object
// ✔️ If called as a standalone function → this = window

// ⚡ ES6 Arrow Functions
// this is lexically bound

// Arrow functions do NOT have their own this.

// Instead, they inherit this from where they were defined, not from how they're called.


// console.log(this)

// function abcd(){
//     console.log(this)
// }
// abcd()

// function a(){
//     function b(){
//           console.log(this)
//     }
//     b()
// }
// a()

// let obj ={
//     fn : function (){
//         console.log(this)
//     }
// }

// obj.fn()


// let af = ()=>{
//     console.log(this)
// }
// af()


// let o = {
//     name:"aryan",
//     fn:()=>{
//         console.log(this.name)
//     }
// }
// o.fn()

// let b = {
//     fn:function(){
//         function a(){
//             console.log(this)
//         }
//         a()
//     }
// }
// b.fn()

// let c = {
//     fn:function(){
//            let a = ()=>{
//             console.log(this)
//         }
//         a()
//     }
// }
// c.fn()


// let h1 = document.querySelector("h1");

// h1.addEventListener("click",()=>{
//     console.log(this)
// })
// h1.addEventListener("dblclick",function(){
//     console.log(this)
// })

let obj ={
    fn:function (){
        let a =()=>{
            
            let b = ()=>{
                 console.log(this)
            }
            b()
        }
        a()
    }
}
obj.fn()