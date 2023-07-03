const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  catargoy: { type: String, required: true, unique: true },
  productimage: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});
const cart = mongoose.model("FooGooduser", cartSchema);
cart.createIndexes();
module.exports = cart;
