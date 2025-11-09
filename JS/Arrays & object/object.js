let obj1 = {
    name:"aryan",
    age:19
}

let obj2 = new Object(); //second way of creating object

console.log(obj1.name)    //this or
console.log(obj1['name']) //that

delete obj1.age    //delete any properties from object

console.log(obj1) 


let nestedObj = {         //nestedObject
    name:"aryan",
    social:{
        instagram:"aryan8bits",
        linkedin:"Aryan-hatake"
    }
}