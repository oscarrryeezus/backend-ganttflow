const express = require('express');
const router = express.Router();

const linkController = require('../controllers/linkController');

router.post('/', linkController.createLink);
router.get('/', linkController.getAllLinks);
router.put('/:id', linkController.updateLink);
router.delete('/:id', linkController.deleteLink);

module.exports = router;
