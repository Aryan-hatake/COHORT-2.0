console.log(4%2); //peechhe wla aage wale ko divide krta aur % remainder deta

//always prefer using === instead of == due to its stict behaviour
//same for !==;
let arr = 12;

//Nullish Coalescing Operator
let User=null;
User ?? console.log("User Does not Exist."); // Agar ek variable ki value null hai toh uske baad joh console.log() hai ya kuch bhi vho chal jayega 


//Optional Chaining

let obj={
    name:"Aryan",
    grade:{
        ten:85,
        twelve:86
    }
};

console.log(obj?.grade?.twelve) //Its just ?. helps in avoiding errors while finding values in obj