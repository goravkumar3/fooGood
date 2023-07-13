const express = require('express')
const router = express.Router()
const Catg=require('../module/Foodcatg')
const { body, validationResult } = require('express-validator');
//fetch the Catg
router.get('/FoodCatg',async (req,res)=>{
    try {
        const catg=await Catg.find({})
        res.json(catg)  
    } catch (err) {
        console.error(err);
    res.status(500).json({err:"Internal server error"})
    }
})
//add Catg
router.post('/addCatg',[
    body('foodCatg')
 ], async (req,res)=>{
    try{
    const {foodCatg}=req.body;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({result:result.array()});
    }   
    const CatgItem=new Catg({
       foodCatg
    })
    const savedCatg=await CatgItem.save()
    res.send(savedCatg);
 }catch(err){
 console.error(err);
 res.status(500).json({err:"Internal server error"});
 }
 })
  //Delete note
  router.delete('/deleteNote/:id',async (req,res)=>{
    try {
        let CatgItem=await Catg.findById(req.params.id);
        if(!CatgItem){return res.status(404).send("Not Found")}
        //allow deletio
        CatgItem=await Catg.findByIdAndDelete(req.params.id);
        res.json({"Success":"Note has been deleted",note:CatgItem})
    } catch (err) {
        console.error(err);
    res.status(500).json({err:"Internal server error"})
    }
    
 })
module.exports=router;