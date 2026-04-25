const express = require('express')
const noteModel = require('./model/note.model')

const app = express()

app.use(express.json())

app.post('/notes',async(req,res)=>{
    const data = req.body

    await noteModel.create({
        title: data.title,
        discription: data.discription
    })

    res.status(201).json({
        message:"note created"
    })

})

app.get('/notes',async(req,res)=>{
    const data = await noteModel.find();

    res.status(201).json({
        message:"data fetched",
        data: data
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const data = req.params.id
    await noteModel.findByIdAndDelete(data)

    res.status(200).json({
        message: "msg delete success"
    })
})

app.patch('/notes/:id',async(req,res)=>{
    const id = req.params.id
    const discription = req.body.discription
    await noteModel.findOneAndUpdate({
        _id:id
    },{
        discription: discription
    })

    res.status(200).json({
        message: "msg updation success"
    })
})

app.get('/',(req,res)=>{
    res.send("hello");
})

module.exports = app;