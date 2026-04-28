require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')
const connectToDB = require('./src/db/db')
const authRoutes = require('./src/routes/auth.route')
const musicRoutes = require('./src/routes/music.route')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/music', musicRoutes)

connectToDB();

app.get('/',(req,res)=>{
    res.send("working")
})

app.listen(3000,()=>{
    console.log("Server listen at port 3000")
})