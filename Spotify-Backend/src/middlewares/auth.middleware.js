const jwt = require('jsonwebtoken')

const authArtist = async(req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            msg:"UnAuthorized"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({
                msg:"U don't have access"
            })
        }

        req.user = decoded;

        next()

    }catch(err){
        console.log(err);
        return res.status(401).json({
            msg:"UnAuthorized"
        })
    }
}

const authUser = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        res.status(401).json({
            msg:"Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)

        if(decoded.role !== 'user'){
            return res.status(403).json({
                msg: "U dont have access"
            })
        }

        req.user = decoded;
        next()

    }catch(err){
        console.log(err);
        return res.status(401).json({
            msg: 'Unauthorized'
        })
    }
}

module.exports = {authArtist,authUser}