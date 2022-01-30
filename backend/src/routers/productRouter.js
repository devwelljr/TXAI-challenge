const express = require("express");
const {
  create,
  myProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const {
  validateCreate,
  validateUpdate,
} = require("../middlewares/productValidation");
const jwtValidation = require("../middlewares/jwtValidation");

/* rota iniciada */
const router = express.Router();

/* create */
router.post("/createProduct", validateCreate, create);

/* update */
router.put("/myProduct/:id", jwtValidation, validateUpdate, updateProduct);

/* delete */
router.delete("/myProduct/:id", jwtValidation, deleteProduct);

/* getAll */
router.get("/myProducts", jwtValidation, myProducts);

module.exports = router;
