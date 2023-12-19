const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Farm = require("../models/farm");
const AppError = require("./AppError");

function wrapAsync(fn) {
	return function (req, res, next) {
		fn(req, res, next).catch((err) => next(err));
	};
}

router.get(
	"/products",
	wrapAsync(async (req, res, next) => {
		let products;
		if (req.query.category) {
			products = await Product.find({
				category: req.query.category,
			}).populate("farm");
		} else {
			products = await Product.find({}).populate("farm");
		}
		res.send(products);
	})
);

router.get(
	"/products/:id",
	wrapAsync(async (req, res, next) => {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return next(new AppError("Product Not Found", 404));
		}
		res.send(product);
	})
);

router.post(
	"/products",
	wrapAsync(async (req, res, next) => {
		let foundFarm = await Farm.findById(req.body.farm);
		if (!foundFarm) {
			return next(new AppError("Farm not exist", 404));
		}
		const product = new Product(req.body);
		const savedProduct = await product.save();
		foundFarm.products.push(savedProduct);
		await foundFarm.save();
		res.send(savedProduct);
	})
);

router.put(
	"/products/:id",
	wrapAsync(async (req, res, next) => {
		const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
			runValidators: true,
			new: true,
		});
		res.send(updated);
	})
);

router.delete(
	"/products/:id",
	wrapAsync(async (req, res, next) => {
		const deleted = await Product.findByIdAndDelete(req.params.id);
		const farm = await Farm.findById(deleted.farm);
		console.log(farm.products);
		farm.products = farm.products.filter(
			(product) => !product.equals(deleted._id)
		);
		console.log(farm.products);
		await farm.save();
		res.send(deleted);
	})
);

module.exports = router;
