const getProduct = (req, res) => {
  res.json({ message: 'Obteniendo todos los productos...', });
}

const getProductById = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Obteniendo el producto con id ${productId}`, });
}

const createProduct = (req, res) => {
  const newProduct = req.body;
  res.json({
    message: 'Producto creado con exito!',
    data: {
      barCode: `${newProduct.barCode}`,
      nombre_prenda: `${newProduct.nombre_prenda}`,
      tipo_tela: `${newProduct.tipo_tela}`,
      tallas_disponibles: `${newProduct.tallas_disponibles}`,
      colores_disponibles: `${newProduct.colores_disponibles}`,
      cantidad_entrante: `${newProduct.cantidad_entrante}`,
      genero_objetivo: `${newProduct.genero_objetivo}`,
      estado_prenda: `${newProduct.estado_prenda}`,
    },
  })
}

module.exports = { getProduct, getProductById, createProduct };