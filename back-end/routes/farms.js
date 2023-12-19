const express = require("express");
const router = express.Router();
const Farm = require("../models/farm");

function wrapAsync(fn) {
	return function (req, res, next) {
		fn(req, res, next).catch((err) => next(err));
	};
}

router.get(
	"/",
	wrapAsync(async (req, res, next) => {
		const farms = await Farm.find({}).populate("products");
		res.send(farms);
	})
);

router.post(
	"/",
	wrapAsync(async (req, res, next) => {
		const farm = new Farm(req.body);
		const savedFarm = await farm.save();
		res.send(savedFarm);
	})
);

router.delete(
	"/:id",
	wrapAsync(async (req, res, next) => {
		const deleted = await Farm.findByIdAndDelete(req.params.id);
		res.send(deleted);
	})
);

module.exports = router;
