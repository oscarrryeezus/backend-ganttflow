const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js')

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/user', authController.getUserData)

module.exports = router;
