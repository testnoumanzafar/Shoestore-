const {default:moongoes}=require("mongoose")

let  Schemacreate=new moongoes.Schema({
    name:String,
    email:String,
    password:String
}) 
 let Users=moongoes.model("user",Schemacreate)
 module.exports ={Users}