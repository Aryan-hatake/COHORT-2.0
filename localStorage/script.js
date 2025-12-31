localStorage.setItem("user","aryan") // - to add new item or override existing ones
localStorage.setItem("age",19) //hatadoge set krne ke baad toh bhi persist karega
localStorage.setItem("faltu","remove karna")

console.log(localStorage.getItem("age")) // - to get any item

localStorage.removeItem("age")  // - to remove any item


let obj = {user:"aryan"};


//stringify to set object as object not as string in local storage works also on array
const newObj = JSON.stringify(obj);
localStorage.setItem("obj",newObj)


//parse to get object as object not as json string works also on array
const parseObj = JSON.parse(localStorage.getItem("obj"))
console.log(parseObj)