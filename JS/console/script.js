let a = "Aryan"
let num = 10;
let obj = {
    name:"aryan",
    designation:"SDE"
}
console.log(a);
console.warn(a);
console.error(a);
console.group(obj);
console.time(obj);


console.table(obj)


console.group("LETS SEE GROUP LOG?") //grouping of logs
console.log({name:"aryan"})
console.log({salary:"50LPA"})
console.log("END?")
console.groupEnd() //<-- mandatory only if you need to create multiple group of logs in order to avoid nesting of group logs


console.group("LETS SEE GROUP2 LOG?") //grouping of logs
console.log({name:"rashi"})
console.log({salary:"1CRPA"})
console.log("END?")



console.time("loopTime");    //use to measure the total time for execution of a code
for(let i=0;i<10000;i++){}
console.timeEnd("loopTime");

//they must have same label