const getProduct = (req, res) => {
  res.json({ message: 'Obteniendo todos los productos...' });
}

const getProductById = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Obteniendo el producto con id ${productId}` });
}

const createProduct = (req, res) => {
  const newProduct = req.body;
  res.json({
    message: 'Product created!',
    data: {
      barCode: `${newProduct.barCode}`,
      productName: `${newProduct.productName}`,
    },
  })
}

module.exports = { getProduct, getProductById, createProduct };