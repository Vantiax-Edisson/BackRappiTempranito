const error_400 = (error,req,res,next)=>{
    if (error.message == "bad request") {
        return res.status(400).json({
            success: false,
            message: "error",
            response: error
        })
    }
    next(error)
}
export default error_400