const express = require("express");
const { login, register } = require('../controllers/userController');
const { validateLogin, validateRegister } = require('../middlewares/userValidation');

/* rota iniciada */
const router = express.Router();

router.post("/login", validateLogin, login);

router.post("/register", validateRegister, register);

module.exports = router;
