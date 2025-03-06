import { Router } from "express";
import routerUsers from "./users.js";

let rounterIndex = Router()
rounterIndex.use('/users',routerUsers)


export default rounterIndex