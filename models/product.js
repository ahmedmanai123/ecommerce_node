const mongoose =require("mongoose") 
const Scategorie =require("./scategorie.js"); 
const productSchema=mongoose.Schema({
 name:{ type: String, required: true,unique:true },
 description:{ type: String, required: true,unique:true }, 
 prix:{ type: Number, required: false }, 
 title:{ type: String, required: true }, 
 qtestock:{ type: Number, required: false }, 
 images:{ type: String, required: false }, 
 scategorieID: {type:mongoose.Schema.Types.ObjectId, 
  ref:Scategorie} 
 }) 
 module.exports=mongoose.model('product',productSchema) 