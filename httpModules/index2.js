// Returning JSON

const http = require('http')

const data = {
    name:"abhishek",
    role: "Developer"
}

http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.write
    res.end(JSON.stringify(data))
}).listen(5000,()=>{
    console.log('server created')
})



// let content = `<h1>hello</h1>`

// http.createServer((req,res)=>{
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(content)
// }).listen(1234,()=>{
//     console.log('server running at 1234');
// })