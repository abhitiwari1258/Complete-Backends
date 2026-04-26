const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    }catch(err){
        console.log("DB connection fail", err);
        
    }
}

module.exports = connectToDB;