// parleG banana

//class banata hai objects , joh ki ek blueprint banane mein help krta
//new keyword before classname se ek blank object banega joh automatically constructor run karega

//Constructor : ek func joh automatically chalta hai jab jaise hi class se naya instance banaya jata hai 

//eg: let k1 = new Kiyaab yaha k1 ek instance hai

//prototype : ek chiz joh tum nhi chate har ke instance ke pass khudka ho aur chate ho ki vho chiz ya value sare instance mein share ho

//prototype is like a shared memory , we shall use prototype when all the instance have same attributes (this.variable) so that same  code for the functionalities or attributes dont get repeated

class OreoFactory{
   constructor(flavor,price){
     this.flavour = flavor
     this.price = price
   }

   makeDough(){
     console.log("dough is preparing...")

     setTimeout(()=>{
        console.log("dough has been prepared !")
     },1000)

   }

   makeCream(){
      console.log(`${this.flavour} flavoured cream is preparing...`)

     setTimeout(()=>{
        console.log(`${this.flavour} flavoured cream has been prepared`)
     },1000)
   }

   assemble(){
        this.makeDough()
        this.makeCream()
        console.log(`assembling...`)

     setTimeout(()=>{
        console.log(`${this.flavour} edition biscuit ready to sell`)
     },1000)

   }
}

let f1 = new OreoFactory("chocolate",15)

// f1.makeDough()
// console.log(f1.flavour)

// f1.assemble()

OreoFactory.prototype.hygiene = function hygiene(){
    console.log("Veg")
    console.log("Properly Sanitized")
}

f1.hygiene()


// constructor ke bahar kuch bhi banao chaiye vho method ya attribute ho vho sab prototype mein chala jayega , constructor ke andar joh bhi hai vho har ek instance ka khudka hoga