const express = require('express')
const HistoryController = require('../controllers/historyController')
const router =  express.Router();

router.get('/',HistoryController.findAll);
router.get('/:id',HistoryController.findOne);
router.post('/',HistoryController.create);
router.patch('/:id',HistoryController.update);
router.delete('/:id',HistoryController.destroy);

module.exports = router

