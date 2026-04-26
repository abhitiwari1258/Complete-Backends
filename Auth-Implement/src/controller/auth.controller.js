const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')

const registerUser = async(req,res)=>{
    const {username,email,password} = req.body;

    // check
    const isUserExist = await userModel.findOne({
        email
    })

    if(isUserExist){
        return res.status(409).json({
            message: "Already Exist"
        })
    }

    const user = await userModel.create({
        username,email,password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message: "user register successfull",
        user
    })

    // server p user register ho rha to token m phla user k data deta h (data obj format m dena h) (condition : data unique hona chiya, or user k data hona chiya)

}

module.exports = {registerUser}