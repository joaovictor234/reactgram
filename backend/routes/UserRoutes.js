const express = require('express');
const router = express.Router();

//controller
const { register, login, getCurrentUser, update, getUserById } = require('../controllers/UserController');
const authGuard = require('../middlewares/authGuard');

//middlewares
const validate = require('../middlewares/handleValidate');
const { imageUpload } = require('../middlewares/imageUpload');
const { userCreateValidation, loginValidation, userUpdateValidation } = require('../middlewares/UserValidations');

//routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), login, register);
router.get('/profile', authGuard, getCurrentUser)
router.put('/', authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)
router.get('/:id', getUserById)

module.exports = router;