//Types of Error

//1.Syntax Error - syntax mein error (error while writing the code i.e at compiled time)
//leat a = 10;

//2.Runtime Error / Type Error - error while running the code not while writing the code
// let a = 10;
// console.log(a.name.first)

//3.Logical Error - unexpected output

//add  1 & 2;               
// let add = 1-2                                //logic galat likha hai
// console.log(add)

// ERROR WITHOUT HANDLING CRASHES THE CODE AND DOESNT RUN THE CODE FURTHER

try{
    console.log(a)
}
catch(err){
    console.log(err)     //ERROR OBJECT -> 1.message , 2.stack, 3.type
}
finally{
    console.log("Harry bhai")
}

// console.log(a)
console.log("Code running even catching error...")


// *CUSTOM EROR*
throw new Error("Error using throw")  //error by using throw will crash the code
console.log(new Error("This is how you make custom error")) //new Error wont crash the code
console.log("Kya yey chalega?")