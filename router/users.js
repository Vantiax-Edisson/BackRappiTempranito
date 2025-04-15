import { Router } from "express";
import {userByName,allUser,userById} from "../controllers/users/read.js"
import create from "../controllers/users/create.js";
import update from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js";
import schemaUser from "../schemas/users/create.js";

const routerUsers = Router()

routerUsers.get('/allUsers',allUser)
routerUsers.get('/name/:nameParams',userByName) 
routerUsers.get('/id/:idParams',userById)
routerUsers.post('/userCreate', validator(schemaUser), create)
routerUsers.put('/updateUser',validator(schemaUser),update)
routerUsers.delete('/deleteUser',deleteUser)


export default routerUsers