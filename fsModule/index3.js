// Appending file

const fs = require('fs')

fs.appendFile("abc.txt","\nAppend File", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Data Append in file")
    }
})