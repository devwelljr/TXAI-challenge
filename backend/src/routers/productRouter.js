const express = require("express");
const { create, myProducts } = require("../controllers/productController");
const { validateCreate } = require('../middlewares/productValidation');
const jwtValidation = require('../middlewares/jwtValidation');

/* rota iniciada */
const router = express.Router();

router.post('/createProduct', validateCreate, create);

router.delete('/myProduct', jwtValidation);

router.get("/myProducts", jwtValidation, myProducts);

module.exports = router;
