// empleadoRoutes.js

const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const multer = require('multer');

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // File name will be timestamp + original name
    }
});

const upload = multer({ storage: storage });

router.post('/', empleadoController.create);
router.post('/cargamasiva', empleadoController.createMany);
router.get('/', empleadoController.getAll);
router.get('/:correo', empleadoController.getById);
router.put('/:correo', empleadoController.update);
router.delete('/:correo', empleadoController.delete);
router.get('/exists/:correo', empleadoController.verificarCorreoExistente);
router.put('/actualizarHorario/:correo', empleadoController.updateByEmail);


module.exports = router;
