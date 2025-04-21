import User from "../../models/User.js";

export default async (req,res,next) => {
    try {

        return res.status(200).json({
            success:true,
            message: "Signed In"
        })

    } catch (error) {
        next(error)
    }
}