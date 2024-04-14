const express = require('express');
const router = express.Router();


const solicitudvacacionesController = require('../controllers/solicitudvacacionesController.js');

router.post('/', solicitudvacacionesController.create);
router.get('/', solicitudvacacionesController.getAll);
router.get('/:NombreEmpleado', solicitudvacacionesController.getById);
router.put('/:NombreEmpleado', solicitudvacacionesController.update);
router.delete('/:NombreEmpleado', solicitudvacacionesController.delete);
router.get('/poradmin/:NombreAdmin', solicitudvacacionesController.getByAdmin);
router.get('/porempleado/:NombreEmpleado', solicitudvacacionesController.getByEmpleado);

module.exports = router;