import dotenv from 'dotenv'
dotenv.config()

const handleError = async(err,req,res,next)=>{
    
    const response = {
        message:err.message
    }
    console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV=="development"){
          response.stack = err.stack
    }

    res.status(401).json(response)

}

export default handleError