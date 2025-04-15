import User from "../../models/User.js";

let update = async (req,res,next) => {
    try {
        let userInfo = req.body
        console.log(userInfo);
        let updateUser = await User.updateOne(
            {name: userInfo.name}, // condiciones de busqueda
            {car: userInfo.car} // modificaciones
        )
        return res.status(200).json({
            response: updateUser
        })   
    } catch (error) {
        next(error)
    }
}

export default update