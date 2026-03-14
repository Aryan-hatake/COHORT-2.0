import { Router } from "express";
import authController from '../controller/auth.controller.js'
import handleError from "../middleware/error.middleware.js";
const authRouter = Router()

authRouter.post("/register",authController.register)


export default authRouter