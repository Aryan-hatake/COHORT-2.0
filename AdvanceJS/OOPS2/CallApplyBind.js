//ek function ke andar this ki value window hoti hai aur jab aap chate ho ki vho value window na ho koi aur object ho tab hum use krte hai call apply and bind

let abcd = ()=>{
    console.log(this)
}
function abcdp(a,b,c){
    console.log(this)
    console.log(a,b,c)
}

let obj = {
    name:"aryan"
}

abcd.call(obj)
//direct call hojata

abcdp.call(obj,1,2,3)
//quirk ig?

abcdp.apply(obj,[1,2,3])
//params in arr

let newF = abcdp.bind(obj,1,2,3)
newF()
//normal tarike se param passing but directly call nhi hota store krna padta hai