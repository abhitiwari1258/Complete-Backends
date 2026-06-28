// video file stream manual

const fs = require('fs')
// const readStream = fs.createReadStream('sample.mp4')
// const writeStream = fs.createWriteStream('Outputsample.mp4')

// readStream.on('data',(chunk)=>{
//     console.log("Writing " + chunk.length + " bytes of data.");
//     writeStream.write(chunk);
// })

// readStream.on('end', () => {
//     console.log("No more data to read. Write operation completed.");
//     writeStream.end();
// })


// automatic

// const fs = require('fs')
const readStream = fs.createReadStream('sample.mp4')
const writeStream = fs.createWriteStream('Outputsample101.mp4')
readStream.pipe(writeStream)

readStream.on('end', () => {
    console.log("No more data to read. Write operation completed.");
})

readStream.on('finish', () => {
    console.log("Data written to output101.mp4 success");
})
