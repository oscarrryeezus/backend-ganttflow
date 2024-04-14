const express = require('express');
const router = express.Router();

const actividadesControllers = require('../controllers/actividadesControllers');

router.post('/', actividadesControllers.create);
router.get('/', actividadesControllers.getAll);
router.get('/:NombreActividad', actividadesControllers.getById);
router.put('/:NombreActividad', actividadesControllers.update);
router.delete('/:NombreActividad', actividadesControllers.delete);

module.exports = router;