const express=require('express')
var router = express.Router()
router.post('/',(req,res)=>{
  res.send("Okay")
})

module.exports=router