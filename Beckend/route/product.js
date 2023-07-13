const express = require('express')
const router = express.Router()
const Product=require('../module/Order')
const { body, validationResult } = require('express-validator');
//fetch the Product
router.get('/fetchProduct',async (req,res)=>{
    try {
        const product=await Product.find({})
        res.json(product)  
    } catch (err) {
        console.error(err);
    res.status(500).json({err:"Internal server error"})
    }
})
//add Product
router.post('/addProduct',[
    body('title',"enter atleast 3 character of title"),
    body('description',"enter atleast 10 character of description"),
    body('foodCatg')
 ], async (req,res)=>{
    try{
    const {title,description,foodCatg}=req.body;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({result:result.array()});
    }   
    const ProductItem=new Product({
       title,description,foodCatg
    })
    const savedProduct=await ProductItem.save()
    res.send(savedProduct);
 }catch(err){
 console.error(err);
 res.status(500).json({err:"Internal server error"});
 }
 })
 //update note
 router.put('/updateNote/:id',async (req,res)=>{
    try {
        const {title,description}=req.body
        //create new note
        const newNote={};
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        let ProductItem=await Product.findById(req.params.id);
        if(!ProductItem){return res.status(404).send("Not Found")}
        ProductItem=await Product.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        res.json(ProductItem)

    } catch (err) {
        console.error(err);
    res.status(500).json({err:"Internal server error"})
    }
    
 })
  //Delete note
  router.delete('/deleteNote/:id',async (req,res)=>{
    try {
        let ProductItem=await Product.findById(req.params.id);
        if(!ProductItem){return res.status(404).send("Not Found")}
        //allow deletio
        ProductItem=await Product.findByIdAndDelete(req.params.id);
        res.json({"Success":"Note has been deleted",note:ProductItem})
    } catch (err) {
        console.error(err);
    res.status(500).json({err:"Internal server error"})
    }
    
 })
module.exports=router;