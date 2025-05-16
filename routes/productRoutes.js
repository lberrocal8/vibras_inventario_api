const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProduct);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);

module.exports = router;