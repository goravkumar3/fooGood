const mongoose =require('mongoose');
const { Schema } = mongoose;
const FoodCatgSchema = new Schema({ 
  foodCatg:{
    type:String,
    required:true,
    unique:true
  }
});
module.exports=mongoose.model('Foodcatg',FoodCatgSchema);