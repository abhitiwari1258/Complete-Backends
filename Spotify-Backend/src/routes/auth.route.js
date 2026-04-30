const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')

router.post('/registering',authController.registerUser)
router.post('/login',authController.loginUser)
router.post('/logout',authController.logOut)
module.exports = router;