const fs = require('fs')
// console.log(fs)

// Reading file
// path encoding callback
// without encoding we get buffer
fs.readFile('Notes.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data) // it return data in buffer format
        // console.log(data.toString())
    }
})