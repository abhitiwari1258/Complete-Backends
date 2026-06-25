// Serving HTML
const http = require('http')

const htmlContent = `<h1>Hello Abhishek</h1> <p>Node Server</p>`

http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html")
    res.end(htmlContent)
}).listen(5000,()=>{
    console.log("server running")
})
