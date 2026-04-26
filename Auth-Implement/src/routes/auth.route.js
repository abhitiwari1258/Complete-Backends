const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')

router.post('/register', authController.registerUser)
// router.get('/test', (req,res)=>{
//     console.log("Cookies : ", req.cookies)

//     res.json({
//         message:"test routes",
//         cookies: req.cookies
//     })
// })


module.exports = router;