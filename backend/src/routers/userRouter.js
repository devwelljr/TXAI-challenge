const express = require("express");
const jwtValidation = require("../middlewares/jwtValidation");
const { login, register, updateUser, deleteUser } = require('../controllers/userController');
const { validateLogin, validateRegister } = require('../middlewares/userValidation');


/* rota iniciada */
const router = express.Router();

/* get by email */
router.post("/login", validateLogin, login);

/* create */
router.post("/register", validateRegister, register);

/* update */
router.put("/update/:id", jwtValidation, updateUser);

/* delete */
router.delete("/delete/:id", jwtValidation, deleteUser);

module.exports = router;
