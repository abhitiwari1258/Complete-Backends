const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/project-1")
        console.log("mongoDB connected successfull")
    }catch(error){
        console.log("Error DB: ",error)
    }
}

module.exports = connectToDB;