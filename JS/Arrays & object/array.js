let arr = new Array(100).fill(2); //second way to create an array
console.log(arr)


let [a, ,b] = [1,2,3,4,5]; //destructuring in array
console.log(a,b)


let ar = [1,2,3,4];

let newAr = ar.filter((e)=>{
    return e<3; //returning is imp as we want to add new e in newAr
})

console.log(newAr)


let s = [1,2,3,4,69];
let sCopy = [...s];  //shallow copying
console.log(sCopy)


sCopy.forEach((e)=>{ //special for loop for array and only array
    console.log(e+2)
})