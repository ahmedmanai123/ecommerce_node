const express = require('express'); 
const router = express.Router(); 
const Product=require("../models/product") 
// afficher la liste des Products.
router.get('/', async (req, res, )=> { 
 try { 
 const products = await
 Product.find().populate("scategorieID").exec(); 
 
 res.status(200).json(products); 

 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// créer un nouvel Product
router.post('/', async (req, res) => { 
 
 const nouvProduct = new Product(req.body) 
 try { 
 await nouvProduct.save(); 
 res.status(200).json(nouvProduct ); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// chercher un Product
router.get('/:ProductId',async(req, res)=>{ 
 try { 
 const art = await Product.findById(req.params.ProductId); 
 
 res.status(200).json(art); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// modifier un Product
router.put('/:ProductId', async (req, res)=> { 
 const { name,description ,prix,title,qtestock,images,scategorieID} = req.body; 
 const id = req.params.ProductId; 
 try { 
 
 const art1 = { name:name,description:description,prix:prix,title:title,qtestock:qtestock,images:images,scategorieID:scategorieID, _id:id }; 
 await Product.findByIdAndUpdate(id, art1); 
 res.json(art1); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
 
}); 
// Supprimer un Product
router.delete('/:ProductId', async (req, res)=> { 
 const id = req.params.ProductId; 
 await Product.findByIdAndDelete(id); 
 res.json({ message: "Product deleted successfully." }); 
}); 
module.exports = router;