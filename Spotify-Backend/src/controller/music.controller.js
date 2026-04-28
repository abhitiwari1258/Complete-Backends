const musicModel = require('../model/music.model')
const albumModel = require('../model/album.model.js')
const jwt = require('jsonwebtoken')
const { uploadFile } = require('../services/storage.service.js')

const createMusic = async (req, res) => {

    const { title } = req.body;
    const file = req.file;

    console.log(file)

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
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
}

const createAlbum = async (req, res) => {

    const { title, musics } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
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

}

module.exports = { createMusic, createAlbum }