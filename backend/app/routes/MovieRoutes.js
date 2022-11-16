const express = require('express')
const MovieController = require('../controllers/MovieController')
const router =  express.Router();

router.get('/',MovieController.findAll);
router.post('/',MovieController.create);
router.get('/:id',MovieController.findOne);
router.delete('/:id',MovieController.destroy);
router.patch( '/:id' , MovieController.update);

module.exports = router