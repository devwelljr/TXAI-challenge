const express = require("express");
const { login, register } = require('../controllers/userController');
const { validateLogin, validateRegister } = require('../middlewares/userValidation');

/* rota iniciada */
const router = express.Router();

/* get by email */
router.post("/login", validateLogin, login);

/* create */
router.post("/register", validateRegister, register);

module.exports = router;
