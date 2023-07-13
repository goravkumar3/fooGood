const mongoose =require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({ 
  title:{
   type:String,
   required:true,
  },
  description:{
    type:String,
    required:true,
  },
  foodCatg:{
    type:String,
    required:true
  },
  Date:{
    type:Date,
    default:Date.now
  }
});
module.exports=mongoose.model('ProductItem',ProductSchema);