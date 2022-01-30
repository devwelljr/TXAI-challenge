const express = require("express");
const jwtValidation = require("../middlewares/jwtValidation");
const { login, register, deleteUser } = require('../controllers/userController');
const { validateLogin, validateRegister } = require('../middlewares/userValidation');


/* rota iniciada */
const router = express.Router();

/* get by email */
router.post("/login", validateLogin, login);

/* create */
router.post("/register", validateRegister, register);

/* delete */
router.delete("/delete", jwtValidation, deleteUser);

module.exports = router;
