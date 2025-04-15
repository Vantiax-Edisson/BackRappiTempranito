import express from "express"
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from "morgan"
import rounterIndex from "./router/index.js"
import not_found_handler from "./middlewares/not_found_handler.js"
import error_handler from "./middlewares/error_handler.js"
import error_400 from "./middlewares/error_400.js"
import contador from "./middlewares/contador.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("Server ready in port :"+PORT);


//configuraciones basicas
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use(contador)

//Configurar Enrutador
server.use('/api',rounterIndex) 
server.use(not_found_handler) //Este el el ultimo normal
server.use(error_400)
server.use(error_handler)  //ESte es el ultimo de error 

server.listen(PORT,ready)
