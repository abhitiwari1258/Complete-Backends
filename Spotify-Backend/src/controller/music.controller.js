const musicModel = require('../model/music.model')
const albumModel = require('../model/album.model.js')
const jwt = require('jsonwebtoken')
const { uploadFile } = require('../services/storage.service.js')

const createMusic = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "UnAuthorized..." })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded);

        if (decoded.role !== "artist") {
            return res.status(403).json({
                msg: "U don't have access to create an music"
            })
        }

        const { title } = req.body;
        const file = req.file; 

        console.log(file)

        const result = await uploadFile(file.buffer.toString('base64'))

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        })

        res.status(201).json({
            message: "Music created Successfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(401).json({ msg: "UnAuthorized !" })
    }
}

const createAlbum = async(req,res)=>{
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "UnAuthorized..." })
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({
                msg: "U dont have access to crt album"
            })
        }

        const {title,musics} = req.body;

        const album = await albumModel.create({
            title,
            artist: decoded.id,
            musics: musics,
        })

        res.status(201).json({
            msg: "Album crted successfull",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            }
        })

    }catch(err){
        console.log(error);
        return res.status(401).json({
            msg:"UnAuthorized"
        })
    }

}

module.exports = { createMusic,createAlbum }