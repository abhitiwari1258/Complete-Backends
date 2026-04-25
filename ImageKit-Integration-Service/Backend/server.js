const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const multer = require('multer')


const connectToDB = require('./src/db/db')
const postModel = require('./src/models/post.model.js')
const uploadFile = require('./src/services/storage.service.js')


// dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({
    storage: multer.memoryStorage() // store file in memory as buffer obj
})
console.log(upload)

connectToDB()

app.post('/create-post',upload.single("image") ,async(req,res)=>{
    // console.log(req.body)
    // console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    console.log(result)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message:"post created success",
        post
    })
})



app.get('/posts',async(req,res)=>{
    const posts = await postModel.find();

    return res.status(201).json({
        message:"post fetched success",
        posts
    })
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})