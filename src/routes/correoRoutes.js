const express = require('express');
const router = express.Router();

const correoController = require('../controllers/correoController.js');

router.post('/',correoController.envioCorreo);

module.exports = router;