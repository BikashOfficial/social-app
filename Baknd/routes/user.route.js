const express = require('express')
const router = express.Router();

const userController = require('../controllers/user.controller.js');
const authUser = require('../middleware/user.auth.js')

router.post('/create', userController.registerUser)

router.post('/login', userController.loginUser)

router.get('/profile', authUser.authMiddleware, userController.getProfile)

router.get('/logout', authUser.authMiddleware, userController.logoutUser)

router.get('/check-username/:value', userController.checkUsername)

router.put('/update-profile', authUser.authMiddleware, userController.updateProfile)

module.exports = router;