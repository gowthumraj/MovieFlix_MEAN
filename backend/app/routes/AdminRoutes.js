const express = require('express')
const AdminController = require('../controllers/AdminController')
const router =  express.Router();

router.get('/',AdminController.findAll);
router.get('/:id',AdminController.findOne);
router.post('/',AdminController.create);
router.patch('/:id',AdminController.update);
router.delete('/:id',AdminController.destroy);

module.exports = router

