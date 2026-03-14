 import { body,validationResult } from "express-validator";


 const validate =  (req,res,next)=>{
      const errors = validationResult(req);

      if(!errors.isEmpty()){
          const err = errors;
          err.status = 401,
          err.message = errors.array()
          next(err)
      }
      next()
  }


export const loginValidation = [
    body("name")
    .isString().withMessage("string mein naam de")
    .custom((value)=>{
        
       if(value!=="aryan"){
          throw Error("tera naam aryan kyu nhi hai")
       }
    }).withMessage("tera naam aryan kyu nhi hai"),
    body("email").isEmail().withMessage("email format is incorrect"),
    validate 
]  
 
