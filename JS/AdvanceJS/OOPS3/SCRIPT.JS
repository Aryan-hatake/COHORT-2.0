//Class Expression

// let  Ani = class{
//     constructor(){
//         this.name="dodo",
//         this.breed="dog"
//     }
// }
// let a = new Ani();            //hoisting not possible in class 
                                 //functionally same no diff b/w normal class and class expression
// console.log(a)


//-------------------------------------------------------------------------------------------------------

//Inheritence

// class Animal{
//     constructor(){
//         this.hands=2
//         this.legs=2
//         this.breed="mammel"
//     }
//     eat(){};
//     breathe(){};
//     susu(){}

// }

// agar koi class hai jismein kuch kuchh likha hai and aap
// maante ho ek nayi class usi ka extension hai to aap wo saare
// features puraani class se borrow kar skte ho and nayi class
// mein use kar skte ho and apne naye features bhi bana sakte ho

// class Kuta extends Animal{
                           
//        constructor(){
//         super()
//        this.breed="dog"
        
//     }                                           //  Rule of ES6 classes
//                                                 // If a class uses extends and has its own constructor,
//                                                 // it MUST call super() before using this.
    
    
//     eat(){};
//     breathe(){};
//     susu(){}
// }

// let k = new Kuta();

// console.log(k)

//---------------------------------------------------------------------------------------------------------------------------

//Getters & Setters

// class GSExe{
//     #private ="Totally private"  // should be define in class itself can only be accesible by class own methods
//     constructor(){
//         this.something="kuch-kuch"; //public
//         this._impSomething = "please dont access this" //_ indicates avoid accessing as it can be crucial
//     }

//     set value(password){
//        if(password===6969){
//            this.#private = 23
//        }
//        else{
//         console.log("Wrong pass")
//        }

//     }

//     get value(){
//         return this.#private;
//     }

// }
// let g = new GSExe()

// g.value=6969
// console.log(g.value)


// ⚡ Getter & Setter — Quickest Notes

// Same name → one virtual property
// get x(), set x(v)

// Use like properties, not functions
// obj.x, obj.x = 10

// Getter → controlled read / computed value

// Setter → validation before updating

// Getter-only → read-only

// Setter-only → write-only

// Pair with #private for real encapsulation

// Put lightweight logic only

// Rule:

// Getter shows safely, Setter updates safely.