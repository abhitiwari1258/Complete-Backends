const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    discription:String
})

module.exports = mongoose.model('note',noteSchema);