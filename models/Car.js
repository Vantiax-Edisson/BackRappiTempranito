import {Schema,model} from "mongoose";

let collection = 'cars'
let schema = Schema({
    name:{type:String,required:true},
    color:{type:String,required:false},
    model:{type:Number,required:true}
},{
    timestamps:true
})

let Car = model(collection,schema)
export default Car