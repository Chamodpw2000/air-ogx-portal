import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'
import cors from 'cors'

import {Router} from "./routes/routes.js"


const app = express()
app.use(express.json())
app.use(cors(

{
    origin : ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}


))
dotenv.config({path: "./config/.env"})
app.use('/aiesecdb',Router)

app.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3000')
})


