// let Laptop ={
//     brand:"asus",
//     price:60000,
//     start:function(){
//         console.log("Laptop Started!")
//     },
//     increasePrice:function(){
//         this.price+=this.price/10;
//         console.log(this.price)
//     }
// }

// Laptop.increasePrice()

//-------------------------------------------------------------

// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary
//     }
//     showDetails(){
//         console.log(this.name ,"-", this.salary)
//     }
// }

// let em1 = new Employee("aryan","1000000000")
// let em2 = new Employee("rashi","1000000000")
// let em3 = new Employee("dev","1000000000")
// em3.salary="2B"

// console.log(em3.salary)

//------------------------------------------------------------------

// class BankAccount{
//     constructor(accname,balance){
//         this.name = accname,
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance+=amount
//         console.log("Your balance :", this.balance)
//     }
// }
// let user1 = new BankAccount("aryan",10000)
// let user2 = new BankAccount("rashi",10000)
// user1.deposit(1)
// console.log(user2.balance)

//----------------------------------------------------------

// let profile = {
//     username:"aryan",
//     printName(){
//       return this.username
//     }
// }
// let a = profile.printName()
// console.log(a)

//-----------------------------------------------------------
// class Vehicle{
// constructor(type,wheels){
//     this.type=type
//     this.wheels=wheels
// }
//   describe(){
//     console.log(this.type ,"-", this.wheels)
// }
// }
// let tata = new Vehicle("car",6)
// let leyland = new Vehicle("truck",12)

//---------------------------------------------------------

// function showBrand(){
//     console.log(this.brand)
// }

// let brand1 ={
//     brand:"abibas"
// }

// let brand2 = {
//     brand:"nuke"
// }

// showBrand.call(brand2)


//---------------------------------------------------------------

// function introduce(city,role){
//     console.log(this.name, " - ",city," - ",role)
// }
// let obj ={
//     name:"aryan"
// }

// introduce.apply(obj,["nerul","SDE"])

//-----------------------------------------------------------------

// function greet(){
//     console.log("Hello",this.name)
// }

// let obj  = {
//     name:"aryan"
// }

// let store = greet.bind(obj)

// store()