sessionStorage.setItem("user","aryan") // - to add new item or override existing ones
sessionStorage.setItem("age",19) //hatadoge set krne ke baad toh bhi persist karega
sessionStorage.setItem("faltu","remove karna")

console.log(sessionStorage.getItem("age")) // - to get any item

sessionStorage.removeItem("age")  // - to remove any item


let obj = {user:"aryan"};


//stringify to set object as object not as string in local storage works also on array
const newObj = JSON.stringify(obj);
sessionStorage.setItem("obj",newObj)


//parse to get object as object not as json string works also on array
const parseObj = JSON.parse(sessionStorage.getItem("obj"))
console.log(parseObj)


// session zinda jabtak browser zinda