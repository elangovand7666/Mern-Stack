import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './Routing/Route.js'

dotenv.config()
const app=express()

app.use(bodyParser.json())


app.use('/api',router)

const port=process.env.PORT
const murl=process.env.MONGO_URL

mongoose.connect(murl).then(()=>{
    console.log("Connected Successfully")
    app.listen(port,()=>{
        console.log("Port in success")
    })
})