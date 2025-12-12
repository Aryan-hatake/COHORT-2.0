
let json = JSON.stringify({name:"aryan",id:1})   //<--- Json banate ho
console.log(json) //whole object in string
let parse = JSON.parse(json)
console.log(parse)  // parsing from json to object