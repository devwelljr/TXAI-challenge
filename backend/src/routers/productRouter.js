const express = require("express");
const { create, myProducts, deleteProduct } = require("../controllers/productController");
const { validateCreate } = require('../middlewares/productValidation');
const jwtValidation = require('../middlewares/jwtValidation');

/* rota iniciada */
const router = express.Router();

/* create */
router.post('/createProduct', validateCreate, create);

/* delete */
router.delete('/myProduct/:id', jwtValidation, deleteProduct);

/* getAll */
router.get("/myProducts", jwtValidation, myProducts);

module.exports = router;
