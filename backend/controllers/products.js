const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Product = require("../models/Product");

// @desc    Get all products
// @route   Get api/v1/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();

  res
    .status(200)
    .json({ success: true, count: products.length, data: products });
});
// @desc    Get a single product
// @route   Get api/v1/products/:id
// @access  Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id:${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: product });
});

// @desc    Add a Product
// @route   POST api/v1/products
// @access  Private
exports.addProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({ success: true, message: product });
});

// @desc    Update a Product
// @route   PUT api/v1/products/:id
// @access  Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id:${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: product });
});

// @desc    Remove a Product
// @route   DELETE api/v1/products/:id
// @access  Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id:${req.params.id}`, 404)
    );
  }

  await Product.findByIdAndRemove(req.params.id);

  res.status(200).json({ success: true, data: {} });
});
