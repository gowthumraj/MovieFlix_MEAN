const express = require('express')
const TheatreController = require('../controllers/theatreController')
const router =  express.Router();

router.get('/',TheatreController.findAll);
router.get('/:id',TheatreController.findOne);
router.post('/',TheatreController.create);
router.patch('/:id',TheatreController.update);
router.delete('/:id',TheatreController.destroy);

module.exports = router

