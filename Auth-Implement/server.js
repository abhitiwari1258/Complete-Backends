const dotenv = require('dotenv')
const express = require('express')
const connectToDB = require('./src/db/db')
dotenv.config()
const authRoutes = require('./src/routes/auth.route')
const postRoutes = require('./src/routes/post.route')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/post', postRoutes)


connectToDB()

app.listen(3000,()=>{
    console.log("Port running at port 3000")
})