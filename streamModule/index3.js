// Read + Write (Duplex)
// Duplex stream is a type of stream that is both readable and writable at the same time.

// pipe() moves data from one stream to another without manual handling.

const fs = require('fs')

const read = fs.createReadStream("100mb.txt")
const write = fs.createWriteStream("copy.txt")

// read.pipe(write)

// read write manually

read.on('data',(chunk)=>{
    console.log("writing" + chunk.length + "bytes of data")
    write.write(chunk)
})

read.on('end',(chunk)=>{
   console.log("no more data to read and write")
   write.end()
})