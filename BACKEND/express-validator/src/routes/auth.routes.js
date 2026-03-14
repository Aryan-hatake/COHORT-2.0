import { Router } from "express";
import { login } from "../controller/auth.controller.js";
import { loginValidation } from "../validation/auth.validator.js";


const authRouter = Router()

authRouter.post("/login",loginValidation,login)

export default authRouter