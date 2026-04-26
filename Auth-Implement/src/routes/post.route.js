const express = require('express');
const router = express.Router()
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')

router.post('/create',async(req,res)=>{

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "UnAuthorized"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded) // return id because because we give id data during token creation

        const user = await userModel.findOne({
            _id: decoded.id
        })
        console.log(user)

        res.status(200).json({
            message: "Authorized user"
        })

    }catch(err){
        return res.status(401).json({
            message: "token invalid"
        })
    }



    console.log(req.body)

    console.log(req.cookies)

    res.send("Post created Successfull")
})

module.exports = router;