// Serving Files

const http = require('http')


const fs = require('fs')
const txt = fs.readFileSync("Notes.txt")

http.createServer((req,res)=>{
    res.end(txt)
}).listen(5000,()=>{
    console.log("server running")
})