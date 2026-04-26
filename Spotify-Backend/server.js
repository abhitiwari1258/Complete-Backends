require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')
const connectToDB = require('./src/db/db')
const authRoutes = require('./src/routes/auth.route')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
connectToDB();

app.get('/',(req,res)=>{
    res.send("working")
})

app.listen(3000,()=>{
    console.log("Server listen at port 3000")
})