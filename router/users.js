import { Router } from "express";
import {userByName,allUser,userById} from "../controllers/users/read.js"
import create from "../controllers/users/create.js";
import update from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";

const routerUsers = Router()

routerUsers.get('/allUsers',allUser)
routerUsers.get('/name/:nameParams',userByName) 
routerUsers.get('/id/:idParams',userById)
routerUsers.post('/userCreate', create)
routerUsers.put('/updateUser',update)
routerUsers.delete('/deleteUser',deleteUser)


export default routerUsers