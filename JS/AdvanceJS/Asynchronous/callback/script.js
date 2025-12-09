//callback ek aisa function hai joh ek another function  ke andar run hoga jab koi kaam complete ho tab

//any function passed into any another function the passed function is known as callback 

function PapaKoMedicalSeIceCreamLao(medical , flavor , wapisLekeAao){

    console.log( medical," medical jara...")

    setTimeout(()=>{
        console.log(`${flavor} ice-cream leleiya`)
        console.log("Ab ice-cream leke arra...")
    },2000)

    setTimeout(()=>{
     wapisLekeAao(flavor)
    },4000)
}



PapaKoMedicalSeIceCreamLao("mahalaxmi","chocolate",function(flavor){
    console.log(flavor,"ice-cream wapis leke aagaya Papa")
})

//-------------------------------------------------------------------------------------

// function one(two){
//     two(function(four){
//         four(function(six){
//             six(function() { console.log( "jara seven pe")})
//         })
//     })
// }

// one(function(three){
//      three(function(five){
//           five(function(seven){
//                seven()
//           })
//      })
// })
