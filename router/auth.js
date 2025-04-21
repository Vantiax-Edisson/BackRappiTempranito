import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import schemaSignIn from "../schemas/auth/signIn.js";
import validator from "../middlewares/validator.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import validedPassword from "../middlewares/validedPassword.js";
import generateToken from "../middlewares/generateToken.js";

const routerAuth = Router()

routerAuth.post('/signIn',validator(schemaSignIn),accountNotExists,validedPassword,generateToken, signIn)


export default routerAuth