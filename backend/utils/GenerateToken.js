require('dotenv').config()
const jwt=require('jsonwebtoken')
console.log("SECRET:", process.env.SECRET_KEY);
exports.generateToken=(payload,passwordReset=false)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:passwordReset?process.env.PASSWORD_RESET_TOKEN_EXPIRATION:process.env.LOGIN_TOKEN_EXPIRATION})
}