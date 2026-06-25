// Creating a Server

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url) // /
    console.log(req.method) // get put post delete
    // console.log(req.headers);

    res.write("Hello "); // Sends data.
    res.statusCode = 200; // Set status code.
    // Set response headers.
    // res.setHeader("Content-Type","application/json");
    res.end("Hlo abhishek") // Ends response.
})

server.listen(5000,()=>{
    console.log("Server running");
})

