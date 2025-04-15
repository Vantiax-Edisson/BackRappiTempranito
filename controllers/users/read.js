import User from "../../models/User.js";
import "../../models/Car.js"

let allUser = async (req,res,next)=>{
    try {
        let {name,role} = req.query
        let query={}
        if (name) {
            query.name = {$regex: name ,$options: 'i'}
        }
        if (role) {
            query.role = role
        }
        let all = await User.find(query).populate('car','').exec();

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
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
        next(error) 
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
        next(error)
    }
}

export {allUser,userByName,userById} 