const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/backend')
        console.log("MongoDB connected successfully")
    }catch(error){
        console.log("db.js : ",error)
    }
}

module.exports = connectDB;

