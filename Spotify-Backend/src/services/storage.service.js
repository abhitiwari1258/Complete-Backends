const {ImageKit} = require('@imagekit/nodejs')

const ImgKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const uploadFile = async(file)=>{
    const result = await ImgKitClient.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "yt-backend/music"
    })
    return result
}

module.exports = {uploadFile}