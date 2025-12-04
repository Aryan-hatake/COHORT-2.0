// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     loggedIn(){
//          console.log("User LoggedIn!")
//     }
// }
// let user1 = new User("aryan","aryan@.com")
// let user2 = new User("rashi","rashi@.com")
// console.log(user1)

//-----------------------------------------------------

// let product ={
//     name:"dyson",
//     price:3300,
//     discount(){
//        return this.price-300
//     }
// }

// console.log(product.discount())

//-------------------------------------------------------

// class Car{
//     constructor(brand,speed){
//         this.brand=brand
//         this.speed=speed
//     }
//     drive(){
//         console.log(`${this.brand} - ${this.speed}`)
//     }
// }
// let Mercedes =  new Car("benz",340)
// let Lambo = new Car("urus",500)
// console.log(Mercedes===Lambo)


//--------------------------------------------------------

// class Student{
//     constructor(name,rollno){
//         this.name=name
//         this.rollno=rollno                           
//     }
//     introduce(){
//         console.log(this.name+" "+this.rollno)
//     }
// }

// let aryan = new Student("aryan",22);
// aryan.introduce()



// let obj = {};                      // Step 1: new empty object
// obj.__proto__ = Student.prototype; // Step 2: link prototype
// Student.call(obj, "aryan", 22);    // Step 3: run constructor with obj as this
// return obj;                        // Step 4: return the object
//-------------------------------------------------------------

// function User(name,age){
//     this.name = name
//     this.age = age;
// }

// let user1 = new User("aryan",23)

// console.log(user1)

//-----------------------------------------------------------------

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.login = function(){
//             console.log("login")
//         }
//     }
// }
// let user1 = new User("aryan",23)

//-----------------------------------------------------------------

// let user1 = {
//      login:function(){}
// }
// let user2 = {
//     login:function(){}
// }

//------------------------------------------------------------------


// function userF(a,b,c){
//     console.log(this.name +a +b +c)
// }
// let obj = {
//     name:"aryan"
// }

// userF.call(obj,1,2,3)
// userF.apply(obj,[1,2,3])
// let store = userF.bind(obj,1,2,3)
// store()

//-----------------------------------------------------------------

// obj1 = {
//     method1:function(){
//         console.log("running for ...",this)
//     }
// }
// obj2 = {

// }

// obj1.method1.call(obj2)

//-----------------------------------------------------------------