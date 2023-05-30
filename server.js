const express = require('express')
const conn = require('./config/db')
const router = require('./routes/user.route')
const app = express()

app.use(express.json())
// console.log('hh',conn)
app.use("/user",router)

app.listen(8080, async(req,res)=>{
   await conn
    console.log('server is running')
})  