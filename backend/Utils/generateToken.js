import  jwt  from "jsonwebtoken";


const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, // milisecond
        httpOnly:true ,// prevent xss attaacks cross-site scripting attacks
        sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENC !== "development"
    })
}

export default generateTokenAndSetCookie