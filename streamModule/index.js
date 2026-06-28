// Reading Files with Streams
// highWaterMark is the maximum amount of data that a stream buffers in memory before it stops reading or writing temporarily.

const fs = require('fs')

const readStream = fs.createReadStream("100mb.txt",{
    highWaterMark: 16 * 1024
})
// console.log(readStream)

var data = ""

readStream.on('data',(chunk)=>{
    // console.log(chunk.toString())
    data = data + chunk
    console.log("Received " + chunk.length + " bytes of data")
})

readStream.on('end',()=>{
    console.log("no more data")
    console.log("data length", + data.length)
})

readStream.on('error',(err)=>{
    console.log("Error : ", err)
})