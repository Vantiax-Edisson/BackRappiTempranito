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

let userByName = async (req,res,next)=>{
    try {

        let nameQuery = req.params.nameParams
        console.log(nameQuery);
        let all = await User.find({name: nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let userById = async (req,res,next)=>{
    try {

        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await User.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export {allUser,userByName,userById} 