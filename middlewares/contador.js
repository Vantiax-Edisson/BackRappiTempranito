let contadorR = 0
const contador = (req,res,next)=>{
    console.log("Han hecho "+contadorR+" peticiones");
    contadorR++
    next()
}
export default contador
