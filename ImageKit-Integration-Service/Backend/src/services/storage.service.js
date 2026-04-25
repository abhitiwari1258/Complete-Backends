const Imagekit = require('@imagekit/nodejs')

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const uploadFile = async(buffer)=>{
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result
}

module.exports = uploadFile;

// Flow:

// File comes from Multer → req.file.buffer
// Buffer → converted to Base64 string
// Sent to ImageKit
// ImageKit uploads → returns URL
// You store URL in DB

// Base64 is an encoding scheme that converts binary data (like images, files, buffers) into a text string.

// A buffer = raw binary data