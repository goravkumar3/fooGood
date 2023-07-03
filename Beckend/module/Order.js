const mongoose=require('mongoose')
const {Schema}=mongoose;
const orderSchema = new Schema({
    productItem:{ type:String,
           required:true}, // String is shorthand for {type: String}
    price:{ type:Number,
        required:true,
        },
    productQuantity:{
        type:Number,
        required:true,
    },
    address:{ type:String,
        required:true},
    number:{ type:Number,
            required:true},
    date: { type: Date, default: Date.now },
  });
  const Order=mongoose.model('customerInfo',orderSchema);
  Order.createIndexes();
  module.exports=Order;