import { Router } from "express";
import {userByName,allUser,userById} from "../controllers/users/read.js"
import register from "../controllers/users/create.js";
import update from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js";
import schemaUser from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

const routerUsers = Router()

routerUsers.get('/allUsers',allUser)
routerUsers.get('/name/:nameParams',userByName) 
routerUsers.get('/id/:idParams',userById)
routerUsers.post('/userCreate', validator(schemaUser),accountExists,createHash,register)
routerUsers.put('/updateUser',validator(schemaUser),update)
routerUsers.delete('/deleteUser',deleteUser)


export default routerUsers