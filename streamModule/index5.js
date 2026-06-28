// transform

const fs = require('fs');
const zlib = require('zlib')

const gzip = zlib.createGzip()
const readStream = fs.createReadStream("sample.mp4");
const writeStream = fs.createWriteStream("xyz.txt.gz");

readStream.pipe(gzip).pipe(writeStream)

writeStream.on('finish', () => {
    console.log('File successfully compressed');
});