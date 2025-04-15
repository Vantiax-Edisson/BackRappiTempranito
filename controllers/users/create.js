import User from "../../models/User.js";

let create = async (req,res,next) => {
    try {
        let userInfo = req.body
        console.log(userInfo);
        let createUser = await User.create(userInfo)
        return res.status(201).json({
            response: createUser
        })   
    } catch (error) {
        next(error)
    }
}

export default create