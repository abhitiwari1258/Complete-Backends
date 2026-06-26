const fs = require('fs')

// Writing Files
fs.writeFile("abc.txt","Writing File", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Data written in file")
    }
})