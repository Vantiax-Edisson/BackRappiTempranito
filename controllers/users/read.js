import User from "../../models/User.js";

let allUser = async (req,res,next)=>{
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export default allUser