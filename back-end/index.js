/* eslint-disable no-unused-vars */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

const AppError = require("./AppError");


const farmRoutes = require("./routes/farms");
const productRoutes = require("./routes/products");
// love bank
mongoose
	.connect("mongodb://127.0.0.1:27017/farmStand2")
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
app.use("/farms", farmRoutes);
app.use("/products", productRoutes);

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

app.use((req, res) => {
	res.status(404).send("Oops, Not found");
});

const handleValidationError = (err) => {
	return new AppError(`Validation Failed...${err.message}`, 400);
};

app.use((err, req, res, next) => {
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

// async function updateFarmItem() {
// 	const items = await Product.find({});
// 	// console.log(items);
// 	for (const item of items) {
// 		console.log(item.farm);
// 		const farm = await Farm.findById(item.farm);

// 		const products = farm.products;
// 		console.log(farm.name);
// 		if (products && !products.includes(item._id)) {
// 			farm.products.push(item);
// 			await farm.save();
// 		}
// 	}
// 	console.log("DONE");
// }

// async function removeNotExist() {
// 	const farms = await Farm.find({}).populate("products");
// 	let existingProducts = await Product.find({});
// 	// console.log(items);
// 	for (farm of farms) {
// 		const products = farm.products;
// 		console.log(farm);

// 		for (product of products) {
// 			if (!existingProducts.includes(product)) {
// 				farm.products = farm.products.filter((item) => item !== product);
// 			}
// 		}
// 	}
// 	console.log("DONE");
// }
