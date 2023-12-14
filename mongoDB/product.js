const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/productApp")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    min: [0, "Price must be positive, bruh"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: [String],
    default: ["cycling"],
  },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({
//   name: "bike wheels",
//   price: 99,
//   //   categories: ["sport", "bike"],
// });
// bike
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.errors));

Product.findOneAndUpdate(
  { name: "bike wheels" },
  { price: -10 },
  { new: true, runValidators: true }
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
