const express = require('express')
const SeatController = require('../controllers/seatController')
const router =  express.Router();

router.get('/',SeatController.findAll);
router.get('/:id',SeatController.findOne);
router.post('/',SeatController.create);
router.patch('/:id',SeatController.update);
router.delete('/:id',SeatController.destroy);

module.exports = router

