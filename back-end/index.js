const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongoose Connected!");
  })
  .catch((err) => {
    console.log("Failed connecting", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.put("/products/:id", async (req, res) => {});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
