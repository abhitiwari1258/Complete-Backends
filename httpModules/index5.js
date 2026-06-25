const http = require('http')
const fs = require("fs");

const stream =fs.createReadStream("Notes.txt")

http.createServer((req,res)=>{
    stream.pipe(res);
}).listen(5000,()=>{
    console.log("server running")
})