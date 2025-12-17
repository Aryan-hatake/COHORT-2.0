import randomName from "./send.js";  
import { skills } from "./send.js";  //in named export naming convention while importing is strict and needs to be same with inclusion of { } that contains the name you wanna import via named export

import { chalo } from "./send.js";
 
import { math , programming , logic } from "./send.js";

console.log(math , programming , logic)


console.log(chalo)
console.log(skills)
console.log(randomName) //random naming possible because we are importing default export