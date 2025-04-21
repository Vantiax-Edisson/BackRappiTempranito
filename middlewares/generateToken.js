import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    console.log("Entro jwt");
    console.log(process.env.SECRET);
    
    const token = jwt.sign(
        {email: req.user.email},
        process.env.SECRET,
        {expiresIn: 60*60*24}    
    )
    console.log(token);
    
    req.token = token
    next()
}