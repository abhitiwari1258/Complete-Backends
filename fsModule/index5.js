// transfer data from 1 file to another

const fs = require('fs')

fs.readFile("Notes.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        let content = data.toString()

        fs.writeFile("xyz.txt",content,(err)=>{
            if(err) console.log(err)
                else console.log("Data Transfer Success");
        })
    }
})