import { Router } from "express";
import routerUsers from "./users.js";
import routerAuth from "./auth.js";

let rounterIndex = Router()

rounterIndex.use('/users',routerUsers) 
rounterIndex.use('/auth',routerAuth)


export default rounterIndex