const express = require('express');
const router = express.Router();


const sedeController= require('../controllers/sedeController.js');

router.post('/', sedeController.create);
router.get('/', sedeController.getAll);
router.get('/:region', sedeController.getById);
router.put('/:region', sedeController.update);
router.delete('/:region', sedeController.delete);

module.exports = router;