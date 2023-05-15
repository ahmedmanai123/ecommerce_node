const mongoose =require("mongoose") 
const categorieSchema=mongoose.Schema({ 
    name:{ type: String, required: true,unique:true }, 
    images :{ type: String, required: false } 
 }) 
module.exports=mongoose.model('categorie',categorieSchema) 