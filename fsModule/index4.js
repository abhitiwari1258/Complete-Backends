// Deleting file

const fs = require('fs')

fs.unlink("abc.txt", (err)=>{
    if(err) console.log('err deleting file');
    else console.log('file delete successfully');
})