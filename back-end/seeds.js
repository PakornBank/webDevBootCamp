const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose Connected!");
  })
  .catch((err) => {
    console.log("Failed connecting", err);
  });

const p = [
  {
    name: "Cheese",
    price: 5.99,
    category: "dairy",
  },
  {
    name: "Banana",
    price: 0.99,
    category: "fruit",
  },
  {
    name: "Cabbage",
    price: 2,
    category: "vegetable",
  },
  {
    name: "Melon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Milk",
    price: 6.5,
    category: "dairy",
  },
];

Product.insertMany(p).then((res) => console.log(res));
