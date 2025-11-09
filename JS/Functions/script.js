function doSomething(name,email){
     console.log(arguments)  //this creates a objects for all arguments (arguments[0] also works for individual)
}
doSomething("aryan","aryangadhave202@gmail.com")


let arr = [1,2,3,4,5];


//spread argument

function spread(a,b,c,d){  //parameter
     console.log(a,b,c,d);
}
spread(...arr) //argument  //spread or rest


//destructure argument

let obj = {name:"aryan",number:8591587882}

function destructuring({name,number}){   //destructuring
     console.log(name,number)
}
destructuring(obj)


function a(){
//the function that returns a function or accepts a function is known as higher order function
}
a(function callback(){       //the function that gets accepted in higher order function is known as callback function

})


//first class function is concept in programming where the function that can be used in variable in any particular programming language is known as first class function