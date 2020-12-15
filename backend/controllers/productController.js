import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
});

const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  return res.status(404).json({
    message: 'Product not found',
  });
});

export { getProducts, getProductByID };
