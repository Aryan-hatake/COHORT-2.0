export async function login(req,res,next) {
   
    try{

        
        res.status(201).json({
            message:"logged in successfully"
        })
    }
    catch(err){
      err.status = 401
      next(err)
    }
}