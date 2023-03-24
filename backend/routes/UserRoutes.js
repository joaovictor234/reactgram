const express = require('express');
const router = express.Router();

//controller
const { register, login } = require('../controllers/UserController');

//middlewares
const validate = require('../middlewares/handleValidate');
const { userCreateValidation, loginValidation } = require('../middlewares/UserValidations');

//routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), login, register);

module.exports = router;