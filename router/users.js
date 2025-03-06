import { Router } from "express";
import allUser from "../controllers/users/read.js"

const routerUsers = Router()

routerUsers.get('/allUsers',allUser)



export default routerUsers