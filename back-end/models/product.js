const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "name cannot be blank"],
  },
  price: {
    type: Number,
    required: [true, "price cannot be blank"],
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
  farm: {
    type: Schema.ObjectId,
    ref: "Farm",
    required: [true, "product must have an origin"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
