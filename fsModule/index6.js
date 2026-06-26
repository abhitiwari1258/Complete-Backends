// read pdf

const fs = require('fs')
// npm install pdf-parse
const pdf = require('pdf-parse')

fs.readFile('A.pdf',async(err,data)=>{
    if(err) console.log(err)
    else{
        console.log("reading pdf")
        const result = await pdf(data)
        console.log(result)
        // console.log(data) // buffer data in bits format
        // console.log(data.toString()) // get data in form of diff sign
    }
})