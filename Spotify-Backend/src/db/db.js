const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }catch(error){
        console.error("DB connection failed")
    }
}

module.exports = connectToDB