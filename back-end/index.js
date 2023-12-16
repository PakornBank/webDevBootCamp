const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

const AppError = require("./AppError");
const Product = require("./models/product");
// love bank
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
app.use(morgan("tiny"));

// app.use((req, res, next) => {
//   console.log("This is my first middleware.");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("This is my second middleware.");
//   next();
// });
// app.use((req, res, next) => {
//   req.requestTime = Date.now();
//   console.log(req.method, req.path, req.params, req.query);
//   next();
// });

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.get(
  "/products",
  wrapAsync(async (req, res, next) => {
    console.log(req.requestTime);
    if (req.query) {
      const products = await Product.find({ category: req.query.category });
      res.send(products);
    } else {
      const products = await Product.find({});
      res.send(products);
    }
  })
);

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new AppError("Product Not Found", 404));
    }
    res.send(product);
  })
);

// app.get("/fly", (req, res) => {
//   throw new AppError("UNACCEPTABLE!", 406);
// });

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.send(savedProduct);
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.send(updated);
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    res.send(deleted);
  })
);

app.use((req, res) => {
  res.status(404).send("Oops, Not found");
});

const handleValidationError = (err) => {
  return new AppError(`Validation Failed...${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") return next(handleValidationError(err));
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "ERROR" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
