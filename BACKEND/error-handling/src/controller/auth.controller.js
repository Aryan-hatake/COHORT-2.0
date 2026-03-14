
const register = async(req,res,next)=>{
   
   try{
       throw new Error("meri marxi")
   } 
   catch(err){
    err.status=401
      next(err)
   }

//    res.status(201).json({
//     message:"user registered"
//    })
}

export default {register}