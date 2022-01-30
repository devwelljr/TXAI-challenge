const {
  listMyProducts,
  createMyProduct,
  deleteMyProduct,
} = require("../services/productService");

/* Controller responsável pela criação de novo produto */
const create = async (req, res, next) => {
  try {
    const { name, price, quantity, email } = req.body;

    const product = await createMyProduct({ name, price, quantity, email });

    return res.status(201).json({ product });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* Controller responsável pela listagem de produtos do usuário */
const myProducts = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const products = await listMyProducts(token);

    if (!products || products.length === 0)
      return res.status(404).json({ message: "Nenhum produto encontrado." });

    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* Controller para deletar um produto */
const deleteProduct =  async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await deleteMyProduct(id);

    if (!product || product.length === 0)
      return res.status(404).json({ message: "Nenhum produto encontrado." });
    
    if (product.message) {
      return res.status(product.status).json({ message: product.message })
    }

    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { create, myProducts, deleteProduct };
