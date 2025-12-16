

//ARRAY

var arr = [10,20,30,40,50];

let arr2 = [...arr]; //<-- spread operator or rest  or let [...arr2] = arr
arr2.pop()
// console.log(arr2)

//---------------------------------------

var name = ["rashi",'aryan','gadhave','.']

var [a,b,...c] = name; //rest operator always at last

// console.log(a , b , c )


//OBJECT

let obj = {
    user:"aryan",
    age:19
}

let obj2 = {...obj} // copying of object using destructuring

obj2.user='rashi';

console.log(obj2)

let {user,age} = obj

console.log(user,age)